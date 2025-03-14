<script lang="ts">
    let {
        date,
        locale = "en-GB",
        timeformat = { day: "numeric", month: "short", year: "numeric" },
        class: className = undefined
    } = $props();
</script>

<span class="{className}">
    {date.toLocaleDateString(locale, timeformat)}
</span>