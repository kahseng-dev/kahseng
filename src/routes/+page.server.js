import { projects } from "$lib/data/projects";
import { techstack } from "$lib/data/techstack";

export function load() {
	return {
		projects: projects.map((project) => ({
			slug: project.slug,
			date_published: project.date_published,
			content: project.content
		})),
		techstack: techstack.map((tech) => ({
			name: tech.name,
			category: tech.category,
			iconURL: tech.iconURL
		})),
		uniqueTechCategories: [...new Set(techstack.map((tech) => tech.category))]
	};
}
