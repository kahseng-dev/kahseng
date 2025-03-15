import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const theme = writable(browser && localStorage.getItem("theme") || "dark");

theme.subscribe(value => {
    if (browser) {
        localStorage.theme = value;
    }
});

export default theme;