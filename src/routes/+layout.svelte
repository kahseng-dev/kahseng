<script lang="ts">
	import '../app.css';
	import '../dark.theme.css';
	import Footer from '$components/Footer.svelte';
</script>

<main class="text-xs mx-auto max-w-screen-sm overflow-x-hidden px-6 py-24 md:overflow-x-visible">
	<slot />
	<Footer />
</main>
