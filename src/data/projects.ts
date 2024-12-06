export type Project = {
	title: string,
	date_published: Date,
	description: string,
	link: string
}

const projects: Project[] = [
	{
		title: "example 1",
		date_published: new Date(2024, 12, 6),
		description: "placeholder",
		link: "/"
	}
]