<script lang="ts">
    let { 
        image,
        tooltipText
    } = $props();
    
    let isVisible = $state(false);
    
    function handleHover() {
        isVisible = !isVisible;
    }
</script>

<button 
    onfocus={handleHover}
    onmouseover={handleHover} 
    onmouseout={handleHover}
    onblur={handleHover}
    class="border border-(--border-0) rounded p-1 relative"
    >
    {#if isVisible}
        <span class="z-10 absolute bottom-11 left-0 whitespace-nowrap border border-(--border-0) text-[0.65rem] rounded bg-(--bg-0) px-1.5 py-0.5">{tooltipText}</span>
    {/if}
    <img
        class="cursor-pointer size-8 p-0.5"
        draggable="false"
        src="{image}"
        alt="{tooltipText}"
    />
</button>