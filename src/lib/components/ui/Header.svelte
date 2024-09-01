<script>
	export let links = [
		{ name: "Home", url: "/" },
		{ name: "Products", url: "/products" },
		{ name: "About", url: "/about" },
		{ name: "Contact", url: "/contact" }
	];
</script>

<header class="bg-white shadow">
	<div class="container mx-auto px-4 py-2 flex justify-between items-center">
		<h1 class="text-2xl font-bold text-gray-800">My Shop</h1>
		<nav>
			<ul class="flex space-x-4">
				{#each links as link}
					<li><a href={link.url} class="text-gray-700 hover:text-blue-500">{link.name}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
