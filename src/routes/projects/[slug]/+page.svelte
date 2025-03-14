<script>
	import { page } from '$app/stores';
	import { projects } from "$lib/data/projects";
	import Breadcrumbs from "$components/Breadcrumbs.svelte";
	import Time from "$components/Time.svelte";

	let slug = $page.params.slug;
	let data = $state(projects.find((project) => project.slug === slug));
	let dataIndex = $state(projects.map((project) => project.slug).indexOf(slug));
</script>

<div class="flex flex-col gap-4">
	<Breadcrumbs/>
	<span>
		published on
		<Time date={data?.date_published}/>
	</span>
	<p>{data?.content}</p>
	<div class="mt-12 grid grid-cols-2 gap-2">
		{#if projects[dataIndex - 1] != undefined}
			<a target="_self" href="/projects/{projects[dataIndex - 1]?.slug}" class="flex flex-col border border-(--border-0) rounded p-4">
				<span class="text-xs">last project</span>
				<span>{projects[dataIndex - 1]?.slug}</span>
			</a>
		{/if}
		{#if projects[dataIndex + 1] != undefined}
			<a target="_self" href="/projects/{projects[dataIndex + 1]?.slug}" class="col-start-2 flex flex-col border border-(--border-0) rounded p-4">
				<span class="text-xs">next project</span>
				<span>{projects[dataIndex + 1]?.slug}</span>
			</a>
		{/if}
	</div>
</div>