<template>
    <div class="lg:grid flex lg:overflow-x-hidden overflow-x-auto grid-cols-8 justify-items-center gap-4">
        <template v-for="(iconItem, iconIndex) in skills">
            <div class="dark:bg-gray-100 rounded-lg p-3 lg:w-auto min-w-[70px] lg:col-span-1 md:col-span-2 col-span-4">
                <NuxtImg width="70" height="70" loading="lazy" :src="iconItem.src" :alt="iconItem.alt" />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
const skills = [
    { src: "/svg/typescript.svg", alt: "Typescript" },
    { src: "/svg/git.svg", alt: "Git" },
    { src: "/svg/nuxt.svg", alt: "Nuxt" },
    { src: "/svg/next.svg", alt: "Nextjs" },
    { src: "/svg/vue.svg", alt: "Vuejs" },
    { src: "/svg/react.svg", alt: "Reactjs" },
    { src: "/svg/tailwind.svg", alt: "TailwindCSS" },
    { src: "/svg/vuetify.svg", alt: "Vuetify" },
];
</script>
