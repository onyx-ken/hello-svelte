<script>
	export let links = [
		{ name: "Home", url: "/" },
		{ name: "Products", url: "/products" },
		{ name: "About", url: "/about" },
		{ name: "Contact", url: "/contact" }
	];

	let theme = "lofi";

	function toggleTheme() {
		theme = theme === "lofi" ? "business" : "lofi";
		document.documentElement.setAttribute("data-theme", theme);
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
		<button on:click={toggleTheme}>
			Toggle Theme
		</button>
	</div>
</header>
