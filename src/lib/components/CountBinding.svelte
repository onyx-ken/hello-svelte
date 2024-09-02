<script>
	export let count = 0;

	export let onCountClick;
</script>

<button on:click={onCountClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
