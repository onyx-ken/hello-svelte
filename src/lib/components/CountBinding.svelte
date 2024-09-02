<script>
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

<button on:click={increment}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>