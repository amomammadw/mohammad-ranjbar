<template>
    <div>
        <h2 class="text-3xl mt-20 font-bold">Projects that I recently contributed in:</h2>
        <div class="mt-10 space-y-5">
            <template v-for="(projectItem, projectIndex) in projects" :key="`${projectIndex}-${projectItem.title}`">
                <div class="shadow-lg bg-white dark:bg-gray-800 rounded-lg mx-auto p-9 grid grid-cols-2 gap-4">
                    <div class="lg:col-span-1 col-span-full order-2 lg:order-1">
                        <NuxtLink
                            :href="projectItem.link"
                            target="_blank"
                            class="font-bold text-3xl text-green-500 dark:text-green-400 hover:text-blue-700 transition-all"
                        >
                            {{ projectItem.title }}
                        </NuxtLink>
                        <p class="my-5">{{ projectItem.description }}</p>
                        <b>Tech Stack:</b>
                        <ol class="list-disc ml-7">
                            <li v-for="(stackItem, stackIndex) in projectItem.stack" :key="stackIndex">
                                {{ stackItem }}
                            </li>
                        </ol>
                    </div>
                    <div class="lg:col-span-1 col-span-full order-1 lg:order-2">
                        <img class="rounded-lg" :src="projectItem.image.src" :alt="projectItem.image.alt" />
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const projects = [
    {
        title: "AI Home Design",
        link: "https://aihomedesign.com",
        description:
            "Had a delightful experience in creating a web application that integrates with a AI engine for redesigning houses.",

        image: {
            src: "/img/projects/aihomedesign.webp",
            alt: "AIhomedesign",
        },

        stack: ["Vuejs", "Nuxtjs", "Typescript", "TailwindCSS", "HeadlessUI", "Pusherjs"],
    },
    {
        title: "Revivoto",
        link: "https://revivoto.com",
        description:
            "Collaborated with an professional team to create a fully-featured website and user-dashboard to handle heavy processes and realtime connections using web sockets",

        image: {
            src: "/img/projects/revivoto.webp",
            alt: "Revivoto",
        },

        stack: ["Vuejs 3", "Nuxtjs", "Pinia", "Typescript", "TailwindCSS", "HeadlessUI", "Socket IO"],
    },
    {
        title: "Trader4",
        link: "https://github.com/traderfour/Trader4.net",
        description: "Had a great time working with a international team to create a great marketplace for traders",

        image: {
            src: "/img/projects/trader4.webp",
            alt: "Trader Four",
        },

        stack: ["Typescript", "Nuxt", "Pinia", "i18n", "TailwindCSS", "Flowbite"],
    },
    {
        title: "Dalan",
        link: "https://github.com/DalanCapital/dalan.capital",
        description: "Created a Great fully dynamic website using Nextjs 13 and its new features",

        image: {
            src: "/img/projects/dalan.capital.webp",
            alt: "Dalan Capital",
        },

        stack: ["Typescript", "React", "Nextjs 13", "Redux", "i18n", "TailwindCSS", "Flowbite", "Headless UI"],
    },
    {
        title: "Type Mate",
        link: "https://amomammadw.github.io/type-mate/",
        description:
            "Had a Great experience in creating an open source NPM package named type-mate to create a smoother experience in coding :)",

        image: {
            src: "/img/projects/type-mate.webp",
            alt: "Type Mate",
        },

        stack: ["Typescript", "Vite", "VitePress", "NPM", "Utilities"],
    },
];
</script>
