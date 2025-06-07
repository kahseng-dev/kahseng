<script lang='ts'>
    import { styles } from '$lib/constants';

    let { icon, name } = $props();

    let isIconHovered = $state(false);

    const handleMouseEnter = () => {
        isIconHovered = true;
    }

    const handleMouseLeave = () => {
        isIconHovered = false;
    }
</script>

<div class='relative'>
    {#if isIconHovered}
        <div class='border {styles.border} absolute pb-0.5 px-1 text-xs left-0 right-0 bottom-12 m-auto w-min whitespace-nowrap rounded bg-(--bg)'>
            <span>{name}</span>
        </div>
    {/if}
    <button
        onmouseenter={handleMouseEnter}
        onmouseleave={handleMouseLeave}
        class='border {styles.border} rounded transition duration-300 cursor-pointer hover:bg-white/20'>
        <img
            class='size-8 m-1'
            draggable='false'
            src={icon}
            alt={name} />
    </button>
</div>