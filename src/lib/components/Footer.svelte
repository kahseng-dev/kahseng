<script lang="ts">
	import { RadioGroup } from 'bits-ui';
	import { theme } from '$lib/stores';
</script>

<footer class="flex justify-between border-t mt-4">
	<links class="flex pt-2 gap-4 text-tiny">
		<a class="flex items-center" target="_blank" href="https://www.linkedin.com/in/kahseng">
			<svg
				class="fill-[--icon-0] mr-1 size-3"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid"
				viewBox="0 0 256 256"
				><path
					d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
				/>
			</svg>
			linkedin
		</a>
		<a class="flex items-center" target="_blank" href="https://read.cv/kahseng">
			<svg
				class="fill-none mr-1 size-3 stroke-2 text-[--icon-0]"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					class="stroke-[--icon-0] stroke-2"
					d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path><path
					d="M8 10L16 10"
					class="stroke-[--icon-0] stroke-2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path><path
					d="M8 18L16 18"
					class="stroke-[--icon-0] stroke-2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path><path
					d="M8 14L12 14"
					class="stroke-[--icon-0] stroke-2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path><path
					d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20"
					class="stroke-[--icon-0] stroke-2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
			resume
		</a>
		<a class="flex items-center" target="_blank" href="https://github.com/kahseng-dev">
			<svg
				class="fill-[--icon-0] mr-1 size-3"
				viewBox="0 0 256 250"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid"
			>
				<path
					d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
				/>
			</svg>
			github
		</a>
	</links>
	<RadioGroup.Root bind:value={$theme} class="mt-2 p-0.5 flex border rounded gap-0.5">
		<RadioGroup.Item
			aria-label="theme light"
			value="light"
			class="p-1 rounded-sm transition hover:bg-[--bg-1] data-[state=checked]:bg-[--bg-1]"
		>
			<svg
				class="size-3 stroke-2 fill-none stroke-[--icon-0] disable-drag bg-transparent"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M22 12L23 12"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M12 2V1"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M12 23V22"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M20 20L19 19"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M20 4L19 5"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M4 20L5 19"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M4 4L5 5"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M1 12L2 12"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		</RadioGroup.Item>
		<RadioGroup.Item
			aria-label="theme dark"
			value="dark"
			class="p-1 rounded-sm transition hover:bg-[--bg-1] data-[state=checked]:bg-[--bg-1]"
		>
			<svg
				class="size-3 stroke-2 fill-none text-[--icon-0] disable-drag bg-transparent"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					class="stroke-[--icon-0] stroke-2"
					d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		</RadioGroup.Item>
	</RadioGroup.Root>
</footer>
