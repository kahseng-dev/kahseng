<script lang="ts">
	import { fade } from "svelte/transition";

    let { 
        text,
        ...rest
    } = $props();

    let isVisible = $state(false);

    export function showToast(duration:number = 1000) {
        isVisible = true;
        setTimeout(() => {
            isVisible = false;
        }, duration);
    }
</script>

{#if isVisible}
    <div
        transition:fade
        class="absolute bottom-6 left-6.5 text-[0.65rem] rounded px-2 py-0.5 bg-(--bg-1)">
        {text}
    </div>
{/if}

