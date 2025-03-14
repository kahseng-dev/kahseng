<script lang="ts">
    let {
        date,
        locale = "en-GB",
        timeformat = { day: "numeric", month: "short", year: "numeric" }
    } = $props();
</script>

<span>
    {date.toLocaleDateString(locale, timeformat)}
</span>