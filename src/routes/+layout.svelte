<script lang="ts">
	import '$src/app.css';
	import { theme } from '$lib/stores';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme === 'dark' ? 'light' : $theme} />
	<link rel="stylesheet" href={`/theme/${$theme}.theme.css`} />
</svelte:head>

<main class="mx-auto max-w-screen-sm overflow-x-hidden px-6 py-24 md:overflow-x-visible md:text-xs">
	<slot />
</main>
