<script lang="ts">
	import { projects } from "$lib/data/projects";
	import Breadcrumbs from "$components/Breadcrumbs.svelte";
	import Time from "$components/Time.svelte";
</script>

<svelte:head>
	<title>projects</title>
</svelte:head>

<div class="flex flex-col gap-4">
	<Breadcrumbs/>
	<div class="flex flex-col gap-2">
		<p class="text-muted">projects</p>
		<hr/>
		{#each projects as project, index}
			<div class="flex justify-between">
				<a href="/projects/{project.slug}">{project.slug}</a>
				<Time class="text-muted" date={project.date_published}/>
			</div>
			{#if index != projects.length - 1}
				<hr/>
			{/if}
		{/each}
	</div>
</div>