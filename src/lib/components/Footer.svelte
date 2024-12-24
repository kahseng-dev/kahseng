<script lang="ts">
	import { RadioGroup } from 'bits-ui';
	import { theme } from '$lib/stores';
</script>

<footer class="flex justify-between border-t mt-4">
	<links class="flex pt-2 gap-4 text-tiny">
		<a class="flex items-center" target="_blank" href="https://www.linkedin.com/in/kahseng">
			<img class="mr-1 size-3" src="logos/linkedin.svg" alt="linkedin" />linkedin
		</a>
		<a class="flex items-center" target="_blank" href="https://read.cv/kahseng">
			<img class="mr-1 size-3" src="icons/page.svg" alt="resume" />resume
		</a>
		<a class="flex items-center" target="_blank" href="https://github.com/kahseng-dev">
			<img class="mr-1 size-3" src="logos/github.svg" alt="github" />github
		</a>
	</links>
	<RadioGroup.Root bind:value={$theme} class="mt-2 p-0.5 flex border rounded gap-0.5">
		<RadioGroup.Item
			aria-label="theme light"
			value="light"
			class="p-1 rounded-sm transition hover:bg-[--bg-1] data-[state=checked]:bg-[--bg-1]"
		>
			<img class="size-3 disable-drag bg-transparent" src="icons/sun-light.svg" alt="sun-light" />
		</RadioGroup.Item>
		<RadioGroup.Item
			aria-label="theme dark"
			value="dark"
			class="p-1 rounded-sm transition hover:bg-[--bg-1] data-[state=checked]:bg-[--bg-1]"
		>
			<img class="size-3 disable-drag bg-transparent" src="icons/half-moon.svg" alt="half-moon" />
		</RadioGroup.Item>
	</RadioGroup.Root>
</footer>
