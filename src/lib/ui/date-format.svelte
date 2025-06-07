<script lang='ts'>
    let { 
            date,
            locale = "en-GB",
            format = {
                day: "numeric",
                month: "short",
                year: "numeric"
            },
            className = '',
        } = $props();

    const formattedDate = new Date(date).toLocaleDateString(locale, format);
</script>

<span class={className}>{formattedDate}</span>