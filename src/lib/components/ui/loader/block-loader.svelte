<script lang="ts">
	import { useInterval } from 'runed';

	const SEQUENCES = [
		['⠁', '⠂', '⠄', '⡀', '⢀', '⠠', '⠐', '⠈'],
		['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'],
		['▖', '▘', '▝', '▗'],
		['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█', '▇', '▆', '▅', '▄', '▃', '▁'],
		['▉', '▊', '▋', '▌', '▍', '▎', '▏', '▎', '▍', '▌', '▋', '▊', '▉'],
		['←', '↖', '↑', '↗', '→', '↘', '↓', '↙'],
		['┤', '┘', '┴', '└', '├', '┌', '┬', '┐'],
		['◢', '◣', '◤', '◥'],
		['◰', '◳', '◲', '◱'],
		['◴', '◷', '◶', '◵'],
		['◐', '◓', '◑', '◒']
	];

	let index = $state(0);
	const indexLength = SEQUENCES[8].length;

	const interval = useInterval(100, {
		immediate: true,
		callback: (count) => {
			index = count % indexLength;
		}
	});
</script>

<span class="inline-block w-[1ch] align-bottom">{SEQUENCES[8][index]}</span>
