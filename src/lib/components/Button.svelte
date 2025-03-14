<script lang="ts">
    let { 
        text = undefined, 
        icon = undefined, 
        color = undefined, 
        class:className = undefined,
        ...rest
    } = $props();
</script>

<button class="cursor-pointer flex rounded px-2 py-2 duration-300 ease-in-out bg-black hover:bg-black/50" aria-label="{icon}" {...rest}>
    <i class="ph ph-{icon}"></i>
    {text}
</button>