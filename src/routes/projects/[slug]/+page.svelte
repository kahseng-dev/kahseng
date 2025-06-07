<script lang='ts'>
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';
	import { projects } from '$lib/data/projects';
	import { styles } from '$lib/constants';

	import Breadcrumbs from '$lib/ui/breadcrumbs.svelte';
	import DateFormat from '$lib/ui/date-format.svelte';

	let slug = $state(page.params.slug);
	let project = $state(projects.find(project => project.slug === slug));

	if (!project) {
		error(404, 'Not found');
	}
	
	let index = $derived(projects.map(project => project.slug).indexOf(slug));
</script>

<svelte:head>
	<title>{slug}</title>
</svelte:head>

<div class='flex flex-col gap-4'>
	<Breadcrumbs />
	<div>
		<p>{slug}</p>
		<p class={styles.text_muted} >
			<span>Published on </span>
			<DateFormat date={project.date} />
		</p>
	</div>
	<div>
		<p class='text-sm'>{project.content}</p>
	</div>
	<div class='mt-24 flex flex-col md:grid md:grid-cols-2 gap-4'>
		{#if projects[index - 1]}
			<a
				target='_self'
				href='/projects/{projects[index - 1].slug}'
				class='p-4 border {styles.border} {styles.hightlight} rounded cursor-pointer transition duration-300 ease-in-out'>
				<p class='text-xs {styles.text_muted}'>last project</p>
				<p>{projects[index - 1].slug}</p>
			</a>
		{/if}
		{#if projects[index + 1]}
			<a
				target='_self'
				href='/projects/{projects[index + 1].slug}'
				class='col-start-2 p-4 border {styles.border} {styles.hightlight} rounded cursor-pointer transition duration-300 ease-in-out'>
				<p class='text-xs {styles.text_muted}'>next project</p>
				<p>{projects[index + 1].slug}</p>
			</a>
		{/if}
	</div>
</div>