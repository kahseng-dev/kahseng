export type skill = {
    name: string,
	icon: string,
	area: string,
}

export const skills: skill[] = [
	{
		name: 'react',
		icon: 'https://svgl.app/library/react_dark.svg',
		area: 'web dev',
	},
	{
		name: 'svelte',
		icon: 'https://svgl.app/library/svelte.svg',
		area: 'web dev',
	},
	{
		name: 'html5',
		icon: 'https://svgl.app/library/html5.svg',
		area: 'web dev',
	},
	{
		name: "css",
		icon: "https://svgl.app/library/css.svg",
		area: 'web dev',
	},
	{
		name: "java",
		icon: "https://svgl.app/library/java.svg",
		area: "mobile dev"
	},
	{
		name: "swift",
		icon: "https://svgl.app/library/swift.svg",
		area: "mobile dev"
	},
	{
		name: "javascript",
		icon: "https://svgl.app/library/javascript.svg",
		area: "web dev"
	},
	{
		name: 'typescript',
		icon: 'https://svgl.app/library/typescript.svg',
		area: 'web dev',
	},
	{
		name: 'python',
		icon: 'https://svgl.app/library/python.svg',
		area: 'data analytics'
	},
	{
		name: 'tailwindcss',
		icon: 'https://svgl.app/library/tailwindcss.svg',
		area: 'web dev',
	},
	{
		name: 'nodejs',
		icon: 'https://svgl.app/library/nodejs.svg',
		area: 'web dev',
	},
	{
		name: 'mysql',
		icon: 'https://svgl.app/library/mysql.svg',
		area: 'database',
	},
	{
		name: 'supabase',
		icon: 'https://svgl.app/library/supabase.svg',
		area: 'database',
	},
	{
		name: 'arudino',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Arduino_Logo_Registered.svg',
		area: 'internet of things',
	},
	{
		name: 'raspberry_pi',
		icon: 'https://svgl.app/library/raspberry_pi.svg',
		area: 'internet of things',
	},
	{
		name: 'pega systems',
		icon: 'https://icons.duckduckgo.com/ip3/www.pega.com.ico',
		area: 'web dev',
	},
]

export function getUnqiueAreas() {
	return [...skills.map(skill => skill.area)]
		.filter((value, index, array) =>
			array.indexOf(value) === index);
}

export function getSkillsByArea(area:string) {
	return skills.filter(skill => skill.area === area);
}