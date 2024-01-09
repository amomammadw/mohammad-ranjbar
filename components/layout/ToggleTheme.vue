<script setup>
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});
</script>

<template>
    <ClientOnly>
        <UButton
            :icon="isDark ? 'i-mdi-moon-waning-crescent' : 'i-mdi-weather-sunny'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
        />

        <template #fallback>
            <div class="w-8 h-8" />
        </template>
    </ClientOnly>
</template>
