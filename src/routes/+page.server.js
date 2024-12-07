import { projects } from './projects.js';
import { techstack } from './techstack.js';

export function load() {
	return {
		projects: projects.map((project) => ({
			title: project.title,
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
