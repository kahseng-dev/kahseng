<script>
	import Time from 'svelte-time';

	let { data } = $props();
</script>

<main>
	<nav class="flex items-center text-tiny">
		<a class="text-muted" href="/">home</a>
		<svg class="size-3 mx-1 fill-none" viewBox="0 0 24 24">
			<path
				class="stroke-[--text-1] stroke-1"
				d="M9 6L15 12L9 18"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<a class="text-muted" href="/projects">projects</a>
		<svg class="size-3 mx-1 fill-none" viewBox="0 0 24 24">
			<path
				class="stroke-[--text-1] stroke-1"
				d="M9 6L15 12L9 18"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<span class="text-muted">{data.project.slug}</span>
	</nav>
	<header class="mt-4 flex flex-col">
		<h1>{data.project.slug}</h1>
		<span class="text-muted text-tiny">
			Published on
			<Time class="text-muted" timestamp={data.project.date_published} format="MMM D, YYYY" />
		</span>
	</header>
	<section class="mt-4">
		<p>{data.project.content}</p>
	</section>
	{#if data.previousProjectSlug || data.nextProjectSlug}
		<section class="flex border-t mt-4 pt-2 gap-2">
			{#if data.previousProjectSlug}
				<a
					class="flex flex-col w-1/2 rounded p-2 transition duration-200 hover:bg-[--bg-1]"
					href="/projects/{data.previousProjectSlug}"
				>
					<span class="mb-1 text-muted bg-transparent">previous</span>
					<span class="text-tiny bg-transparent">{data.previousProjectSlug}</span>
				</a>
			{/if}
			{#if data.nextProjectSlug}
				<a
					class="flex flex-col w-1/2 rounded p-2 transition duration-200 hover:bg-[--bg-1]"
					href="/projects/{data.nextProjectSlug}"
				>
					<span class="mb-1 text-muted bg-transparent">next</span>
					<span class="text-tiny bg-transparent">{data.nextProjectSlug}</span>
				</a>
			{/if}
		</section>
	{/if}
</main>
