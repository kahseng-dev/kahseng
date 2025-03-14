<script lang="ts">
	import "../app.css";
	import "$lib/theme/dark.theme.css";
	import Footer from '$components/Footer.svelte';
</script>

<div class="grid grid-cols-4 py-30 bg-(--bg-0) text-(--text-0) md:text-sm">
	<div class="min-h-screen col-start-2 col-span-2">
		<slot/>
		<Footer/>
	</div>
</div>