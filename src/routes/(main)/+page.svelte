<script>
	import CountBinding from '$lib/components/CountBinding.svelte';
	import { countStore } from '$lib/stores';

	let count;

	// 스토어를 구독하여 count 변수를 업데이트
	countStore.subscribe(value => {
		count = value;
	});

	function increment() {
		countStore.update(n => n + 1);
	}
</script>

<h1>Welcome to SvelteKit</h1>
<div class="card-body">
	<CountBinding />
	<button on:click={increment}>Page Increment Click</button>
</div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>