<script lang='ts'>
    import { page } from '$app/state';
    import { styles } from '$lib/constants';

    import { IconChevronRight } from '@tabler/icons-svelte';

    const pathname = page.url.pathname.split("/").filter((p) => p != '');

    const breadcrumbList = [...pathname];
</script>

<div class='flex items-center gap-2 text-xs'>
    <a 
        href='../'
        class='hover:underline' >
        <span>home</span>
    </a>
    <IconChevronRight class={styles.icon} />
    {#each breadcrumbList as breadcrumb, index}
        {#if index != breadcrumbList.length - 1}
            <a 
                href='./'
                class='hover:underline' >
                <span>{breadcrumb}</span>
            </a>
            {:else}
            <span>{breadcrumb}</span>
        {/if}
        {#if index + 1 != breadcrumbList.length}
            <IconChevronRight class={styles.icon} />
        {/if}
    {/each}
</div>