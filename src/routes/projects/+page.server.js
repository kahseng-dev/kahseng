import { projects } from '$data/projects.js';

export function load() {
	return {
		projects: projects.map((project) => ({
			slug: project.slug,
			date_published: project.date_published,
			content: project.content
		}))
	};
}
