<script lang="ts">
	import theme from "$lib/shared/stores/theme";
	import "../app.css";
	import Footer from "$components/Footer.svelte";

	let { children } = $props();
</script>

<div class="{$theme} transition grid py-10 px-5 bg-(--bg-0) text-(--text-0) text-xs md:text-sm md:grid-cols-4 md:px-0 md:py-30">
	<div class="min-h-screen col-start-2 col-span-2">
		{@render children()}
		<Footer/>
	</div>
</div>