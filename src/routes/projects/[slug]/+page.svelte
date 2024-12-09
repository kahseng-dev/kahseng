<script>
	import Time from 'svelte-time';

	let { data } = $props();
</script>

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
	<header>
		<h1 class="mt-4">{data.project.slug}</h1>
		<span class="text-muted text-[0.6rem]">
			Published on
			<Time class="text-muted" timestamp={data.project.date_published} format="MMM D, YYYY" />
		</span>
		<p class="mt-4">{data.project.content}</p>
	</header>
</main>
