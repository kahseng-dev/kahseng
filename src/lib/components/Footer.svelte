<script lang="ts">
	
</script>

<div class="border-t border-(--border-0) my-8 py-2 flex justify-between gap-2">
	<div class="flex gap-8">
		<a class="flex items-center gap-1" target="_blank" href="https://www.linkedin.com/in/kahseng">
			<i class="ph ph-linkedin-logo"></i>
			linkedin
		</a>
		<a class="flex items-center gap-1" target="_blank" href="https://github.com/kahseng-dev">
			<i class="ph ph-github-logo"></i>
			github
		</a>
	</div>
	<div class="border border-(--border-0) rounded p-0.5 flex">
		<label class="flex items-center justify-center transition cursor-pointer rounded p-1 hover:bg-(--bg-1)">
			<input 
				type="radio"
				value="dark" 
				class="appearance-none" 
				aria-label="dark-theme"
				checked
				/>
				<i class="ph ph-moon"></i>
		</label>
		<label class="flex items-center justify-center transition cursor-pointer rounded p-1 active:bg-white hover:bg-(--bg-1)">
			<input 
				type="radio"
				value="light" 
				class="appearance-none" 
				aria-label="light-theme"
				/>
				<i class="ph ph-sun"></i>
		</label>
	</div>
</div>