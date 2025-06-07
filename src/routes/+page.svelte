<script lang='ts'>
    import { styles } from '$lib/constants';

    import { projects } from '$lib/data/projects';
    import {
        getUnqiueAreas,
        getSkillsByArea,
    } from '$lib/data/skills';

    import { IconArrowRight, IconMail } from '@tabler/icons-svelte';

    import Toast from '$lib/ui/toast.svelte';
    import BrandIcons from '$lib/ui/brand-icons.svelte';
    import DateFormat from '$lib/ui/date-format.svelte';
    
    const email: string = 'kahseng.chew@protonmail.com';
    const uniqueAreas: string[] = getUnqiueAreas();

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
    }
</script>

<svelte:head>
	<title>kahseng</title>
</svelte:head>

<div class='flex flex-col gap-8'>
    <div class='flex items-center justify-between'>
        <p class='flex flex-col'>
            hello! i'm kahseng
            <span class={styles.text_muted}>front-end web developer</span>
        </p>
        <Toast 
            doTask={copyEmailToClipboard}
            label={email}
            message={'copied to clipboard'}
            Icon={IconMail} />
    </div>
    <div>
        <p>
            As a full-stack developer, I specialize in both frontend and 
            backend development, with a strong focus on user experience. 
            I'm passionate about crafting interfaces that not only look 
            beautiful but also provide intuitive and seamless interactions. 
            I believe in paying close attention to every detail to ensure 
            that every element serves both aesthetic appeal and functional 
            value.
            <br/><br/>In this space, I'll be showcasing some of the projects 
            I've worked on, where I continuously strive to create experiences 
            that are both visually captivating and highly functional.
        </p>
    </div>
    <div>
        <p class='{styles.text_muted} py-2'>tech stack</p>
        <hr class={styles.border} />
        {#each uniqueAreas as area}
            <div class='p-2 flex'>
                <p class='w-1/2'>{area}</p>
                <div class='w-1/2 flex flex-wrap gap-2'>
                    {#each getSkillsByArea(area) as skill}
                        <BrandIcons 
                            icon={skill.icon}
                            name={skill.name}/>
                    {/each}
                </div>
            </div>
            <hr class={styles.border} />
        {/each}
    </div>
    <div>
        <a 
            href='./projects'
            class='{styles.text_muted} py-2 flex items-center gap-1'>
            <span>projects</span>
            <span class='{styles.text_muted}'>({projects.length})</span>
            <IconArrowRight class={styles.icon} />
        </a>
        <hr class={styles.border} />
        {#each projects as project}
            <a
                href='/projects/{project.slug}'
                class='p-2 flex justify-between cursor-pointer hover:bg-black/20'>
                <p>{project.slug}</p>
                <DateFormat date={project.date} className={styles.text_muted} />
            </a>
            <hr class={styles.border} />
        {/each}
    </div>
</div>