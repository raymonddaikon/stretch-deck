<script lang="ts">
	import { type DateValue, getLocalTimeZone, today } from '@internationalized/date';
	import { untrack } from 'svelte';
	import { ProfileIcon, SlashIcon } from '$lib/components/icons';
	import * as Avatar from '$lib/components/ui/avatar';
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import * as CalendarComponents from '$lib/components/ui/calendar/index.js';
	import * as m from '$lib/paraglide/messages';
	import { cn } from '$lib/utils.js';

	type UserInfo = {
		id: string;
		name?: string;
		imageUrl?: string;
		completedAt?: Date;
	};

	type Data = {
		date: Date;
		value: number | null;
		users?: UserInfo[];
	};

	type ActivityCalendarProps = {
		data: Data[];
		class?: string;
	};

	let { data, class: className }: ActivityCalendarProps = $props();

	// Create a map for quick lookup of activity by date string
	const activityMap = $derived.by(() => {
		const map = new Map<string, number>();
		for (const item of data) {
			if (item.value !== null) {
				const dateKey = item.date.toDateString();
				map.set(dateKey, item.value);
			}
		}
		return map;
	});

	// Create a map for quick lookup of users by date string
	const usersMap = $derived.by(() => {
		const map = new Map<string, UserInfo[]>();
		for (const item of data) {
			if (item.users && item.users.length > 0) {
				const dateKey = item.date.toDateString();
				map.set(dateKey, item.users);
			}
		}
		return map;
	});

	// Get users for the selected day
	const selectedDayUsers = $derived.by(() => {
		if (!value) return [];
		const date = value.toDate(getLocalTimeZone());
		return usersMap.get(date.toDateString()) ?? [];
	});

	// Calculate max value for normalization
	const maxValue = $derived.by(() => {
		let max = 0;
		for (const item of data) {
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
	function getActivityColorClass(level: number, outsideMonth: boolean): string {
		// if (outsideMonth) {
		// 	// Muted colors for outside month days
		// 	switch (level) {
		// 		case 1:
		// 			return 'bg-green-100/50 dark:bg-green-900/20';
		// 		case 2:
		// 			return 'bg-green-200/50 dark:bg-green-800/30';
		// 		case 3:
		// 			return 'bg-green-300/50 dark:bg-green-700/40';
		// 		case 4:
		// 			return 'bg-green-400/50 dark:bg-green-600/50';
		// 		default:
		// 			return '';
		// 	}
		// }

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
				return '';
		}
	}

	const MAX_USERS = 9; // First and last pages show 9
	const MIDDLE_PAGE_USERS = MAX_USERS - 1; // Middle pages show 8 (room for both buttons)

	// Calculate total pages with variable page sizes
	// Page 1: MAX_USERS, Middle pages: MIDDLE_PAGE_USERS, Last page: up to MAX_USERS
	const totalPages = $derived.by(() => {
		const total = selectedDayUsers.length;
		if (total <= MAX_USERS) return 1;
		// After first page, remaining users are split into middle pages (8 each) + possible last page
		const afterFirst = total - MAX_USERS;
		if (afterFirst <= MAX_USERS) return 2;
		// For middle pages: each takes MIDDLE_PAGE_USERS, last page takes remainder (up to MAX_USERS)
		return 2 + Math.ceil((afterFirst - MAX_USERS) / MIDDLE_PAGE_USERS);
	});

	// Current page state
	let currentPage = $state(1);

	// Calculate start index for a given page
	function getPageStartIndex(page: number): number {
		if (page === 1) return 0;
		// Page 1 has MAX_USERS, then middle pages have MIDDLE_PAGE_USERS each
		return MAX_USERS + (page - 2) * MIDDLE_PAGE_USERS;
	}

	// Calculate how many users a given page should show
	function getPageSize(page: number, total: number, numPages: number): number {
		if (numPages === 1) return total;
		if (page === 1) return MAX_USERS;
		if (page === numPages) {
			// Last page gets whatever is left, up to MAX_USERS
			const startIdx = getPageStartIndex(page);
			return Math.min(MAX_USERS, total - startIdx);
		}
		return MIDDLE_PAGE_USERS;
	}

	// Users to display on current page
	const paginatedUsers = $derived.by(() => {
		const startIndex = getPageStartIndex(currentPage);
		const pageSize = getPageSize(currentPage, selectedDayUsers.length, totalPages);
		return selectedDayUsers.slice(startIndex, startIndex + pageSize);
	});

	// Total count of users on all previous pages (left side of current page)
	const prevPageCount = $derived.by(() => {
		if (currentPage <= 1) return 0;
		// All users before the current page's start index
		return getPageStartIndex(currentPage);
	});

	// Total count of users on all next pages (right side of current page)
	const nextPageCount = $derived.by(() => {
		if (currentPage >= totalPages) return 0;
		const currentPageStartIndex = getPageStartIndex(currentPage);
		const currentPageSize = getPageSize(currentPage, selectedDayUsers.length, totalPages);
		// All users after the current page
		return selectedDayUsers.length - currentPageStartIndex - currentPageSize;
	});

	const todayDate = today(getLocalTimeZone());

	let placeholder = $state(todayDate);
	let value = $state<DateValue | undefined>(todayDate);
	let selectedUser = $state<UserInfo | null>(null);

	// Reset page and selected user when selected day changes
	$effect(() => {
		selectedDayUsers;
		untrack(() => {
			currentPage = 1;
			selectedUser = null;
		});
	});

	function formatCompletionTime(date?: Date): string {
		if (!date) return '';
		return date.toLocaleTimeString(undefined, {
			hour: 'numeric',
			minute: '2-digit'
		});
	}

	function handleAvatarClick(user: UserInfo) {
		selectedUser = selectedUser?.id === user.id ? null : user;
	}

	function handlePrevPage() {
		if (currentPage > 1) {
			currentPage--;
			selectedUser = null;
		}
	}

	function handleNextPage() {
		if (currentPage < totalPages) {
			currentPage++;
			selectedUser = null;
		}
	}

	function isDateDisabled(date: DateValue) {
		return date.compare(todayDate) > 0;
	}
</script>

{#snippet stackedAvatar(user: UserInfo, index: number, totalCount: number)}
	<button
		type="button"
		data-selected={selectedUser?.id === user.id}
		class="user-item relative cursor-pointer focus:outline-none focus-visible:border-2 focus-visible:border-border data-[selected=true]:border data-[selected=true]:border-black"
		style="z-index: {totalCount - index};"
		onclick={(e) => {
			e.stopPropagation();
			handleAvatarClick(user);
		}}
	>
		<Avatar.Root class={cn('aspect-square h-full w-full rounded-none')}>
			{#if user.imageUrl}
				<Avatar.Image src={user.imageUrl} alt={user.name ?? 'User'} referrerpolicy="no-referrer" />
			{/if}
			<Avatar.Fallback class="border border-border bg-muted">
				{#if user.name}
					{user.name.charAt(0).toUpperCase()}
				{:else}
					<ProfileIcon />
				{/if}
			</Avatar.Fallback>
		</Avatar.Root>
	</button>
{/snippet}

{#snippet placeholderAvatar()}
	<div
		class="user-item relative cursor-pointer focus:outline-none focus-visible:border-2 focus-visible:border-border"
	>
		<Avatar.Root class={cn('aspect-square h-full w-full rounded-none')}>
			<Avatar.Fallback class="border border-border bg-transparent">
				<SlashIcon class="size-full" />
			</Avatar.Fallback>
		</Avatar.Root>
	</div>
{/snippet}

<div class={cn('activity-calendar relative flex flex-1 flex-col', className)}>
	<Calendar
		type="single"
		{isDateDisabled}
		bind:placeholder
		bind:value
		class="flex-none border-b border-border"
	>
		{#snippet day({ day: dateValue, outsideMonth })}
			{@const level = getActivityLevel(dateValue)}
			{@const colorClass = getActivityColorClass(level, outsideMonth)}
			<CalendarComponents.Day
				class={cn(
					colorClass,
					level > 0 && 'text-green-950 dark:text-green-50',
					level > 2 && 'text-white dark:text-green-50'
				)}
			/>
		{/snippet}
	</Calendar>

	<div class="flex flex-1 flex-col overflow-y-hidden">
		<div class="users-row w-full flex-none gap-0.5 p-0.5">
			{#if prevPageCount > 0}
				<button
					type="button"
					class="user-item col-span-1 flex aspect-square h-full cursor-pointer items-center justify-center bg-black font-medium text-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					onclick={(e) => {
						e.stopPropagation();
						handlePrevPage();
					}}
				>
					+{prevPageCount}
				</button>
			{/if}
			{#if selectedDayUsers.length > 0}
				{#each paginatedUsers as user, index (user.id + '-' + index)}
					{@render stackedAvatar(user, index, paginatedUsers.length)}
				{/each}
			{:else}
				{@render placeholderAvatar()}
			{/if}
			{#if nextPageCount > 0}
				<button
					type="button"
					class="user-item col-span-1 flex aspect-square h-full cursor-pointer items-center justify-center bg-black font-medium text-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					onclick={(e) => {
						e.stopPropagation();
						handleNextPage();
					}}
				>
					+{nextPageCount}
				</button>
			{/if}
		</div>
		<div class="flex w-full flex-1 items-center">
			{#if selectedUser}
				<div class="flex flex-1 flex-row justify-between gap-0.5 px-1 text-sm">
					<span class="font-medium text-black">{selectedUser.name ?? 'Anonymous'}</span>
					{#if selectedUser.completedAt}
						<span class="text-sm">
							{formatCompletionTime(selectedUser.completedAt)}
						</span>
					{/if}
				</div>
			{:else}
				<span class="flex-1 px-1 text-left text-sm text-muted-foreground">
					{m.completion_count({ count: selectedDayUsers.length })}
				</span>
			{/if}
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
