<script lang='ts'>
    import '../app.css';

    import Footer from '$lib/ui/footer.svelte';
    
    const { children } = $props();
    
    let theme: string = $state('dark');
</script>

<div class='{theme} min-h-screen antialiased font-mono px-4 py-12 md:py-24 text-xs md:text-base grid grid-cols-5 transition duration-300 bg-(--bg) text-(--text)'>
    <div class='col-start-2 col-span-3'>
        {@render children()}
        <Footer bind:theme={theme} />
    </div>
</div>
