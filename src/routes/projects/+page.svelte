<script lang="ts">
	import Time from 'svelte-time';

	let { data } = $props();
</script>

<svelte:head>
	<title>projects</title>
</svelte:head>

<main>
	<nav class="flex items-center text-[0.6rem]">
		<a class="text-muted" href="/">home</a>
		<svg class="size-3 mx-1 fill-none" viewBox="0 0 24 24">
			<path
				class="stroke-[--text-1] stroke-1"
				d="M9 6L15 12L9 18"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<span class="text-muted">projects</span>
	</nav>
	<section>
		<h2 class="mt-4 pb-2 text-muted">projects</h2>
		{#each data.projects as { slug, date_published }}
			<article class="py-2 border-t flex justify-between">
				<a href="/projects/{slug}">{slug}</a>
				<Time class="text-muted" timestamp={date_published} format="MMM D, YYYY" />
			</article>
		{/each}
	</section>
</main>
