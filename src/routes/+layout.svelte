<script lang='ts'>
    import '../app.css';
    import { browser } from '$app/environment';

    import Footer from '$lib/ui/footer.svelte';
    
    const { children } = $props();

    let theme = $state('dark');

    if (browser) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark';
        }

        if (!localStorage.theme) {
            localStorage.setItem('theme', 'dark');
        }

        theme = localStorage.theme;
    }
</script>

<div class='min-h-screen antialiased font-mono px-4 py-12 md:py-24 text-xs md:text-base md:grid md:grid-cols-5 text-(--text)'>
    <div class='md:col-start-2 md:col-span-3'>
        {@render children()}
        <Footer bind:theme={theme} />
    </div>
</div>