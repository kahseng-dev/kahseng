<script lang='ts'>
  import { styles } from '$lib/constants';
    import { fade } from 'svelte/transition';

    let { doTask, label, message, Icon } = $props();

    let isToastHidden = $state(true);

    const handleShowToast = () => {
        let duration = 2000;

        isToastHidden = false;
        doTask();

        setTimeout(() => {
            isToastHidden = true;
        }, duration);
    }
</script>

<div class='relative'>
    {#if !isToastHidden}
        <div
            transition:fade
            class='absolute bottom-12 right-0 md:left-0 md:bottom-7 md:m-auto px-2 py-0.5 text-xs rounded text-center w-min whitespace-nowrap bg-(--highlight)'>
            <span>{message}</span>
        </div>
    {/if}
    <button
        onclick={handleShowToast}
        class='hidden md:flex py-1 px-2 text-xs cursor-pointer transition duration-300 rounded h-min {styles.text_muted} hover:text-(--text) {styles.hightlight}'>
        <span>{label}</span>
    </button>
    <button
        onclick={handleShowToast}
        class='flex md:hidden shadow-md p-2 cursor-pointer rounded-full h-min bg-(--highlight)'>
        <Icon />
    </button>
</div>