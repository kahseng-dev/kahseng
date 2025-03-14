<script lang="ts">
    import { page } from '$app/stores';

    let urls = $page.url.pathname.split("/").filter(Boolean);
</script>

<div class="flex items-center gap-2">
    <a class="hover:underline" href="../">home</a>
    <i class="ph ph-caret-right"></i>
    {#each urls as url, index}
        {#if index != urls.length - 1}
            <a href="./" class="hover:underline">{url}</a>
            <i class="ph ph-caret-right"></i>
            {:else}
            <span>{url}</span>
        {/if}
    {/each}
</div>