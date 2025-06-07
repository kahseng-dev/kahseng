<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { styles } from '$lib/constants';

	import Breadcrumbs from '$lib/ui/breadcrumbs.svelte';
	import DateFormat from '$lib/ui/date-format.svelte';
</script>

<svelte:head>
	<title>projects</title>
</svelte:head>

<div>
	<Breadcrumbs />
	<div class='mt-4'>
		<p>projects <span class='{styles.text_muted}'>({projects.length})</span></p>
		<hr class='mt-4 {styles.border}' />
		<div>
			{#each projects as project}
				<a
					class='py-2 flex justify-between hover:bg-black/20 px-2'
					href='./projects/{project.slug}'>
					<span>{project.slug}</span>
					<DateFormat date={project.date} className={styles.text_muted} />
				</a>
				<hr class={styles.border} />
			{/each}
		</div>
	</div>
</div>