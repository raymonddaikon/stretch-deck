<script lang="ts">
	import { ExitIcon } from '$lib/components/icons';

	type Props = {
		value: string;
		disabled: boolean | null;
		active: boolean;
		onDelete: (value: string) => void;
	};

	let { value, disabled, onDelete, active }: Props = $props();
</script>

<div
	class="flex place-items-center gap-0.5 rounded-md bg-foreground p-1 text-[14px] font-normal text-black uppercase ring-offset-background transition-all hover:cursor-default aria-selected:bg-secondary/90 aria-selected:ring-2 aria-selected:ring-ring aria-selected:ring-offset-2"
	aria-selected={active}
>
	<span class="inline align-baseline text-box-trim!">
		{value}
	</span>
	<button
		class="cursor-pointer"
		type="button"
		{disabled}
		aria-label="remove"
		onclick={() => onDelete(value)}
	>
		<ExitIcon class="size-3.5" />
	</button>
</div>
