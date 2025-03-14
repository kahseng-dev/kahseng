<script lang="ts">
	import { fade } from "svelte/transition";

    let { 
        text,
        toastText,
        onclick,
        ...rest
    } = $props();

    let isVisible = $state(false);

    export function handleClick() {
        isVisible = true;
        setTimeout(() => {
            isVisible = false;
        }, 1000);
    }
</script>

<button
    class="relative cursor-pointer rounded px-2 transition text-[0.65rem] hover:bg-(--bg-1)"
    {...rest}
    onclick={() => handleClick()}
    >
    {#if isVisible}
        <div 
            transition:fade
            class="absolute bottom-7 left-6 inline text-[0.65rem] rounded px-2 py-0.5 bg-(--bg-1)"
            >
            {toastText}
        </div>
    {/if}
    {text}
</button>