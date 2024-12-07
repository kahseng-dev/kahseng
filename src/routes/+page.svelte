<script>
	import Time from 'svelte-time';
	let { data } = $props();
</script>

<svelte:head>
	<title>kahseng</title>
</svelte:head>

<header class="flex justify-between text-center">
	<h1>hello! i'm kahseng</h1>
	<span class="text-[0.6rem]">kahseng.chew@protonmail.com</span>
</header>
<p class="mt-2 text-muted">mobile and full-stack web developer</p>
<p class="mt-4">
	i'm a developer who works on both frontend and backend, i love focusing on user experience, paying
	close attention to every detail, and creating beautiful and intuitive interfaces that blend
	aesthetics with usability.
</p>
<p class="mt-4">
	here i'll be sharing some projects that i've worked on. always striving to create experiences that
	are not just visually appealing but also highly functional.
</p>
<div class="mt-4">
	<h1 class="py-2 text-muted">tech stack</h1>
</div>
<section>
	{#each data.uniqueTechCategories as category}
		<article class="py-1 border-t flex justify-between">
			<p class="w-1/2">{category}</p>
			<p class="w-1/2 flex gap-2">
				{#each data.techstack as tech}
					{#if tech.category === category}
						<img
							class="size-6 disable-drag"
							src="https://svgl.app/library/{tech.name}.svg"
							onerror={(event) => {
								const target = event.target;
								if (target instanceof HTMLImageElement) {
									target.src = tech.iconURL || 'icons/exclamation-circle.svg';
								}
							}}
							alt={tech.name}
						/>
					{/if}
				{/each}
			</p>
		</article>
	{/each}
</section>
<div class="mt-4">
	<h1 class="py-2 text-muted">projects</h1>
</div>
<section>
	{#each data.projects as { title, date_published }}
		<article class="py-1 border-t flex justify-between">
			<span>{title}</span>
			<Time class="text-muted" timestamp={date_published} format="MMM D, YYYY" />
		</article>
	{/each}
</section>
