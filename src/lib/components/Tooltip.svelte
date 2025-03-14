<script lang="ts">
    let { 
        image,
        tooltipText
    } = $props();
    
    let isVisible = $state(false);
    
    function handleHover() {
        isVisible = !isVisible;
    }

    function handleLeave() {
        isVisible = false;
    }
</script>

<button 
    onfocus={handleHover}
    onmouseenter={handleHover}
    onblur={handleHover}
    onmouseover={handleHover}
    onmouseout={handleLeave}
    onmouseleave={handleLeave}
    disabled
    class="relative border border-(--border-0) rounded p-1 transition hover:bg-(--bg-1)"
    >
    {#if isVisible}
        <span class="z-10 absolute bottom-11 left-0 whitespace-nowrap border border-(--border-0) text-[0.65rem] rounded bg-(--bg-0) px-1.5 py-0.5">{tooltipText}</span>
    {/if}
    <img
        class="cursor-pointer size-8 p-0.5 rounded"
        draggable="false"
        src="{image}"
        alt="{tooltipText}"
    />
</button>