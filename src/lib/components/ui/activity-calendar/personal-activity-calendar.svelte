<script lang="ts">
	import { type DateValue, getLocalTimeZone, today } from '@internationalized/date';
	import { AccountCoState, CoState } from 'jazz-tools/svelte';
	import { SlashIcon } from '$lib/components/icons';
	import * as Avatar from '$lib/components/ui/avatar';
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import * as CalendarComponents from '$lib/components/ui/calendar/index.js';
	import * as m from '$lib/paraglide/messages';
	import { Deck, Decks, StretchDeckAccount } from '$lib/schema';
	import { cn } from '$lib/utils.js';

	type PersonalActivityCalendarProps = {
		class?: string;
	};

	let { class: className }: PersonalActivityCalendarProps = $props();

	// Fetch current user's account with activity data
	const me = new AccountCoState(StretchDeckAccount, {
		resolve: {
			root: true,
			profile: {
				decks: { $each: { activity: true } }
			}
		}
	});

	// const layoutContext = getLayoutContext();

	// const deckActivity = new CoState(
	// 	Decks,
	// 	layoutContext.me.current.$isLoaded ? layoutContext.me.current.profile.decks.$jazz.id : '',
	// 	{
	// 		resolve: {
	// 			$each: { activity: true }
	// 		}
	// 	}
	// );

	// Aggregate activity from all decks
	const activityData = $derived.by(() => {
		if (
			!me.current.$isLoaded ||
			!me.current.profile.$isLoaded ||
			!me.current.profile.decks.$isLoaded
		) {
			return [];
		}

		const dateMap = new Map<string, { date: Date; count: number }>();
		const todayDate = today(getLocalTimeZone());

		// Initialize last 365 days
		for (let i = 0; i < 365; i++) {
			const date = todayDate.subtract({ days: i }).toDate(getLocalTimeZone());
			const dateKey = date.toDateString();
			dateMap.set(dateKey, { date, count: 0 });
		}

		// Aggregate activity from all decks
		for (const deck of me.current.profile.decks.$isLoaded ? me.current.profile.decks : []) {
			if (!deck?.$isLoaded || !deck.activity?.$isLoaded) continue;
			const myActivity = deck.activity.byMe;
			if (myActivity) {
				for (const item of myActivity.all) {
					if (!item.value.$isLoaded) continue;
					const completedDate = item.value.completed;
					if (completedDate) {
						const dateKey = new Date(completedDate).toDateString();
						const existing = dateMap.get(dateKey);
						if (existing) {
							existing.count += 1;
						}
					}
				}
			}
		}

		return Array.from(dateMap.values())
			.map((data) => ({
				date: data.date,
				value: data.count
			}))
			.sort((a, b) => a.date.getTime() - b.date.getTime());
	});

	// Create a map for quick lookup of activity by date string
	const activityMap = $derived.by(() => {
		const map = new Map<string, number>();
		for (const item of activityData) {
			if (item.value !== null) {
				const dateKey = item.date.toDateString();
				map.set(dateKey, item.value);
			}
		}
		return map;
	});

	// Get activity count for the selected day
	const selectedDayCount = $derived.by(() => {
		if (!value) return 0;
		const date = value.toDate(getLocalTimeZone());
		return activityMap.get(date.toDateString()) ?? 0;
	});

	// Calculate max value for normalization
	const maxValue = $derived.by(() => {
		let max = 0;
		for (const item of activityData) {
			if (item.value !== null && item.value > max) {
				max = item.value;
			}
		}
		return max || 1; // Avoid division by zero
	});

	// Get activity level (0-4) for a given date, similar to GitHub's heatmap
	function getActivityLevel(dateValue: DateValue): number {
		const date = dateValue.toDate(getLocalTimeZone());
		const dateKey = date.toDateString();
		const value = activityMap.get(dateKey);

		if (value === undefined || value === 0) return 0;

		const normalized = value / maxValue;
		if (normalized <= 0.25) return 1;
		if (normalized <= 0.5) return 2;
		if (normalized <= 0.75) return 3;
		return 4;
	}

	// Get the background color class based on activity level
	function getActivityColorClass(level: number): string {
		switch (level) {
			case 1:
				return 'bg-green-200 dark:bg-green-900';
			case 2:
				return 'bg-green-400 dark:bg-green-700';
			case 3:
				return 'bg-green-500 dark:bg-green-600';
			case 4:
				return 'bg-green-600 dark:bg-green-500';
			default:
				return 'text-black';
		}
	}

	const todayDate = today(getLocalTimeZone());

	let placeholder = $state(todayDate);
	let value = $state<DateValue | undefined>(todayDate);

	function isDateDisabled(date: DateValue) {
		return date.compare(todayDate) > 0;
	}
</script>

{#snippet placeholderAvatar()}
	<div
		class="user-item relative cursor-pointer focus:outline-none focus-visible:border-2 focus-visible:border-border"
	>
		<Avatar.Root class={cn('aspect-square h-full w-full rounded-none')}>
			<Avatar.Fallback class="bg-transparent">
				<SlashIcon class="size-full" />
			</Avatar.Fallback>
		</Avatar.Root>
	</div>
{/snippet}

<div
	class={cn(
		'activity-calendar relative flex flex-1 flex-col gap-3 bg-transparent pb-3.5',
		className
	)}
>
	<Calendar
		type="single"
		{isDateDisabled}
		bind:placeholder
		bind:value
		class="flex-none bg-transparent"
		headerClass="pt-1"
	>
			{#snippet day({ day: dateValue, outsideMonth })}
				{@const level = getActivityLevel(dateValue)}
				{@const colorClass = getActivityColorClass(level)}
				<CalendarComponents.Day
					class={cn(
						colorClass,
						level > 0 && 'text-green-950 dark:text-green-50',
						level > 2 && 'text-white dark:text-green-50'
					)}
				/>
			{/snippet}
	</Calendar>

	<div class="flex flex-1 flex-col gap-1 overflow-y-hidden bg-transparent">
		<div class="users-row w-full flex-none gap-0.5">
			{@render placeholderAvatar()}
		</div>
		<div class="flex w-full flex-1 items-center bg-transparent">
			<span class="flex-1 px-1 text-left text-sm text-muted-foreground">
				{m.completion_count({ count: selectedDayCount })}
			</span>
		</div>
	</div>
</div>

<style>
	.users-row {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
	}

	.user-item {
		aspect-ratio: 1;
	}
</style>
