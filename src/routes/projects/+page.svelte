<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { styles } from '$lib/constants';

	import { IconExternalLink } from '@tabler/icons-svelte';

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
					href={project.content === '' ? `${project.link}` : `/projects/${project.slug}`}
                	target={project.content === '' ? '_blank' : '_self'}
					class='py-2 flex justify-between {styles.hightlight} px-2'>
					<div class='flex items-center gap-2'>
						<p>{project.slug}</p>
						{#if project.content === ''}
							<IconExternalLink class={styles.icon} />
						{/if}
					</div>
					<DateFormat date={project.date} className={styles.text_muted} />
				</a>
				<hr class={styles.border} />
			{/each}
		</div>
	</div>
</div>