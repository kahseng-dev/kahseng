export type Project = {
    slug: string,
    date_published: Date,
    content: string
}

export const projects: Project[] = [
	{
		slug: "example-1",
		date_published: new Date(2024, 11, 6),
		content: "placeholder"
	},
	{
		slug: "example-2",
		date_published: new Date(2024, 11, 6),
		content: "placeholder"
	},
	{
		slug: "example-3",
		date_published: new Date(2024, 11, 6),
		content: "placeholder"
	}
]