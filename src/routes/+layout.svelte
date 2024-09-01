<script>
	import "tailwindcss/tailwind.css";
	import Header from '$lib/components/ui/Header.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';
</script>

<Header />
<slot />
<Footer />
