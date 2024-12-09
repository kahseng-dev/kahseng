import { error } from '@sveltejs/kit';
import { projects } from '$data/projects.js';

export function load({ params }) {
	const project = projects.find((project) => project.slug === params.slug);

	if (!project) error(404);

	return {
		project
	};
}
