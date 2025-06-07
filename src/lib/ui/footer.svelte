<script lang='ts'>
    import { styles } from '$lib/constants';

    import {
        IconBrandLinkedin,
        IconBrandGithub,
        IconMoon,
        IconSun,
    } from '@tabler/icons-svelte';

    let { theme = $bindable() } = $props();

    const handleThemeChange = (e: Event) => {
        const target = e.target as HTMLInputElement;

        if (!target) {
            return
        }

        localStorage.setItem('theme', target.value);

        if (theme != 'dark') {
            return document.documentElement.classList.remove('dark');
        }

        return document.documentElement.classList.add('dark');
    }
</script>

<div class='mt-12 text-xs md:text-sm'>
    <hr class={styles.border} />
    <div class='mt-1 flex justify-between'>
        <div class='flex flex-col md:flex-row md:gap-8'>
            <a
                href='https://www.linkedin.com/in/kahseng'
                target='_blank'
                class='flex gap-2 items-center {styles.text_muted} transition duration-300 hover:text-(--text)'>
                <IconBrandLinkedin class={styles.icon} />
                <span>linkedin</span>
            </a>
            <a
                href='https://github.com/kahseng-dev'
                target='_blank'
                class='flex gap-2 items-center {styles.text_muted} transition duration-300 hover:text-(--text)'>
                <IconBrandGithub class={styles.icon} />
                <span>github</span>
            </a>
        </div>
        <div class='p-1 *:px-0.5 *:pb-0.5 flex flex-col md:flex-row gap-1 border {styles.border} rounded'>
            <label class='rounded cursor-pointer transition duration-300 {styles.hightlight} has-checked:bg-(--highlight)'>
                <input
                    onchange={handleThemeChange}
                    bind:group={theme}
                    value='dark'
                    type='radio'
                    class='hidden' />
                <IconMoon class={styles.icon} />
            </label>
            <label class='rounded cursor-pointer transition duration-300 {styles.hightlight} has-checked:bg-(--highlight)'>
                <input
                    onchange={handleThemeChange}
                    bind:group={theme}
                    value='light'
                    type='radio'
                    class='hidden' />
                <IconSun class={styles.icon} />
            </label>
        </div>
    </div>
</div>