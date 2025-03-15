<script lang="ts">
	import theme from "$lib/shared/stores/theme";

	let currentTheme:string;

	theme.subscribe((value) => {
		currentTheme = value
	})
</script>

<div class="border-t border-(--border-0) my-8 py-2 flex justify-between gap-2">
	<div class="flex gap-8">
		<a class="flex items-center gap-1 transition hover:text-(--text-1)" target="_blank" href="https://www.linkedin.com/in/kahseng">
			<i class="ph ph-linkedin-logo"></i>
			linkedin
		</a>
		<a class="flex items-center gap-1 transition hover:text-(--text-1)" target="_blank" href="https://github.com/kahseng-dev">
			<i class="ph ph-github-logo"></i>
			github
		</a>
	</div>
	<div class="border border-(--border-0) rounded p-1 flex gap-1">
		{#each ["dark", "light"] as value}
			<button 
				onclick={() => (theme.set(value))}
				class="
					flex items-center justify-center transition cursor-pointer rounded p-1 hover:bg-(--bg-1)
					{currentTheme == value ? "active" : ""}
					">
				{#if value === "dark"}
					<i class="ph ph-moon"></i>
				{:else}
					<i class="ph ph-sun"></i>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	button.active {
		background-color: var(--bg-1);
	}
</style>