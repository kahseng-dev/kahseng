<script>
	import Time from 'svelte-time';
	import { Popover, Tooltip } from 'bits-ui';

	let { data } = $props();

	const email = 'kahseng.chew@protonmail.com';
</script>

<svelte:head>
	<title>kahseng</title>
</svelte:head>

<main>
	<header>
		<container class="flex justify-between">
			<h1>hello! i'm kahseng</h1>
			<Popover.Root>
				<Popover.Trigger>
					<button class="text-[0.6rem]" onclick={() => navigator.clipboard.writeText(email)}>
						{email}
					</button>
				</Popover.Trigger>
				<Popover.Content side="top" transitionConfig={{ y: 8, duration: 150 }} sideOffset={8}>
					<Popover.Arrow class="rounded-[2px] border-l border-t border-dark-10" />
					<div class="flex border border-dark-10 p-1.5 text-[0.5rem]">copied to clipboard!</div>
				</Popover.Content>
			</Popover.Root>
		</container>
		<p class="text-muted">mobile and full-stack web developer</p>
	</header>
	<section>
		<p class="mt-4">
			i'm a developer who works on both frontend and backend, i love focusing on user experience,
			paying close attention to every detail, and creating beautiful and intuitive interfaces that
			blend aesthetics with usability. <br /><br />
			here i'll be sharing some projects that i've worked on. always striving to create experiences that
			are not just visually appealing but also highly functional.
		</p>
	</section>
	<section>
		<h2 class="mt-4 py-2 text-muted">tech stack</h2>
		{#each data.uniqueTechCategories as category}
			<article class="py-2 border-t flex justify-between">
				<p class="w-1/2">{category}</p>
				<p class="w-1/2 flex gap-4">
					{#each data.techstack as tech}
						{#if tech.category === category}
							<Tooltip.Root openDelay={0}>
								<Tooltip.Trigger>
									<img
										class="cursor-default disable-drag size-6"
										src="https://svgl.app/library/{tech.name}.svg"
										onerror={(event) => {
											const target = event.target;
											if (target instanceof HTMLImageElement) {
												target.src = tech.iconURL || 'icons/x.svg';
											}
										}}
										alt={tech.name}
									/>
								</Tooltip.Trigger>
								<Tooltip.Content transitionConfig={{ y: 10, duration: 150 }}>
									<Tooltip.Arrow class="rounded-[2px] border-l border-t border-dark-10" />
									<div
										class="select-none flex items-center justify-center rounded-input border border-dark-10 p-1.5 text-[0.5rem]"
									>
										{tech.name}
									</div>
								</Tooltip.Content>
							</Tooltip.Root>
						{/if}
					{/each}
				</p>
			</article>
		{/each}
	</section>
	<section>
		<h2 class="mt-4 py-2 text-muted">projects</h2>
		{#each data.projects as { title, date_published }}
			<article class="py-1 border-t flex justify-between">
				<span>{title}</span>
				<Time class="text-muted" timestamp={date_published} format="MMM D, YYYY" />
			</article>
		{/each}
	</section>
</main>
