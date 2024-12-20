import { error } from '@sveltejs/kit';
import { projects } from '$data/projects.js';

export function load({ params }) {

	const project = projects.find((project) => project.slug === params.slug);
	
	if (!project) error(404, { message: 'page not found' });

	const currentProjectIndex = projects.indexOf(project);
	const nextProjectSlug = projects[currentProjectIndex + 1]?.slug;
	const previousProjectSlug = projects[currentProjectIndex - 1]?.slug;
	
	return {
		project,
		nextProjectSlug,
		previousProjectSlug
	};
}