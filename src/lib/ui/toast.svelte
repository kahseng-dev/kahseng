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
            class='absolute bottom-12 right-0 md:left-0 md:bottom-7 md:m-auto px-2 py-0.5 text-xs rounded text-center w-min whitespace-nowrap bg-white/10'>
            <span>{message}</span>
        </div>
    {/if}
    <button
        onclick={handleShowToast}
        class='hidden md:flex py-1 px-2 text-xs cursor-pointer transition duration-300 rounded h-min {styles.text_muted} hover:text-white hover:bg-white/10'>
        <span>{label}</span>
    </button>
    <button
        onclick={handleShowToast}
        class='flex md:hidden p-2 cursor-pointer rounded-full h-min bg-white/50'>
        <Icon />
    </button>
</div>