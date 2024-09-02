<script>
	import { browser } from '$app/environment';
	import { onMount } from "svelte";

	export let links = [
		{ name: "Home", url: "/" },
		{ name: "Products", url: "/products" },
		{ name: "About", url: "/about" },
		{ name: "Contact", url: "/contact" }
	];

	let theme = "lofi";

	if (browser) { // 웹 브라우저환경에서만 로컬스토리지 접근
		onMount(() => { // 페이지가 로딩이 완료되면 실행
			const savedTheme = localStorage.getItem("theme");
			if (savedTheme) {
				theme = savedTheme;
				document.documentElement.setAttribute("data-theme", theme);
			}
		});
	}

	function toggleTheme() {
		theme = theme === "lofi" ? "business" : "lofi";
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}
</script>

<header class="shadow">
	<div class="container mx-auto px-4 py-2 flex justify-between items-center">
		<h1 class="text-2xl font-bold">My Shop</h1>
		<nav>
			<ul class="flex space-x-4">
				{#each links as link}
					<li><a href={link.url} class="hover:text-primary">{link.name}</a></li>
				{/each}
			</ul>
		</nav>
		<button on:click={toggleTheme} aria-label="Toggle Theme">
			{#if theme === "lofi"}
				<!-- 태양 아이콘 (라이트 모드) -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
					/>
				</svg>
			{:else}
				<!-- 초승달 아이콘 (다크 모드) -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
					/>
				</svg>
			{/if}
		</button>
	</div>
</header>
