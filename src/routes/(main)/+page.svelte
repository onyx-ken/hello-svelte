<script>
	import CountBinding from '$lib/components/CountBinding.svelte';

	let count = 10

	function onCountClick() {
		count += 1;
	}
</script>

<h1>Welcome to SvelteKit</h1>
<div class="card-body">
	<CountBinding {count} {onCountClick}/>
	<button on:click={onCountClick}>Page Increment Click</button>
</div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
