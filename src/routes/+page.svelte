<script lang="ts">
	import { techstacks } from "$lib/data/techstacks";
	import { projects } from "$lib/data/projects";
	import Toast from "$components/Toast.svelte";
	import Tooltip from "$components/Tooltip.svelte";
	import Time from "$components/Time.svelte";

	let uniqueTechStackCategory:string[] = [...new Set(techstacks.map((tech) => tech.category))];
	let email:string = $state("kahseng.chew@protonmail.com");
	let toast: Toast; 

	function copyToClipboard(text:string) {
		navigator.clipboard.writeText(text);
	}
</script>

<svelte:head>
	<title>kahseng</title>
</svelte:head>

<div class="flex flex-col gap-8">
	<div>
		<div class="flex items-center justify-between">
			<span>hello! i'm kahseng</span>
			<button 
				class="inline-flex items-center justify-center relative cursor-pointer rounded px-2 transition text-[0.65rem] hover:bg-(--bg-1)"
				onclick={() => {
					copyToClipboard(email);
					toast.showToast();
				}}
				>
				<Toast 
					text="copied to clipboard" 
					bind:this={toast}/>
				<span class="hidden md:flex">{email}</span>
				<i class="md:hidden ph ph-envelope-simple text-lg bg-(--bg-1) rounded-full p-2"></i>
			</button>
		</div>
		<p class="text-muted">mobile and full-stack web developer</p>
	</div>
	<p class="lowercase">
		As a full-stack developer, I specialize in both frontend and backend development, with a strong focus on user experience. I'm passionate about crafting interfaces that not only look beautiful but also provide intuitive and seamless interactions. I believe in paying close attention to every detail to ensure that every element serves both aesthetic appeal and functional value.<br/><br/>
		In this space, I'll be showcasing some of the projects I've worked on, where I continuously strive to create experiences that are both visually captivating and highly functional.
	</p>
	<div class="flex flex-col gap-2">
		<p class="text-muted">tech stack</p>
		<hr/>
		{#each uniqueTechStackCategory as category, index}
			<div class="flex justify-between">
				{category}
				<div class="w-1/2 flex flex-wrap gap-2">
					{#each techstacks.filter(tech => tech.category === category) as techstack}
						<div class="flex items-center justify-center">
							<Tooltip tooltipText={techstack.name} image={techstack.icon} />
						</div>
					{/each}
				</div>
			</div>
			{#if index != uniqueTechStackCategory.length - 1}
				<hr/>
			{/if}
		{/each}
	</div>
	<div class="flex flex-col gap-2">
		<a href="/projects">
			<span class="flex items-center gap-2 text-muted">
				projects
				<i class="ph ph-arrow-right"></i>
			</span>
		</a>
		<hr/>
		{#each projects as { slug, date_published }, index}
			<a href="/projects/{slug}" class="flex justify-between">
				<p class="hover:text-(--text-1) transition">{slug}</p>
				<Time class="text-muted" date={date_published}/>
			</a>
			{#if index != projects.length - 1}
				<hr/>
			{/if}
		{/each}
	</div>
</div>