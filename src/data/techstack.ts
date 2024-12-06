export type Tech = {
	name: string,
	category: string,
	projects?: string[]
}

export const techstack: Tech[] = [
	{
		name: "svelte",
		category: "framework",
		projects: ["kahseng.dev"]
	}
] 