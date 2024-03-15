<template>
    <div>
        <h2 class="text-3xl mt-20 font-bold">Projects, Courses & Packages I Created Recently</h2>
        <div class="mt-10 space-y-5">
            <template v-for="(projectItem, projectIndex) in projects" :key="`${projectIndex}-${projectItem.title}`">
                <NuxtLink :href="projectItem.link" target="_blank" class="block">
                    <div class="shadow-lg bg-white dark:bg-gray-800 rounded-lg mx-auto p-9 grid grid-cols-2 gap-4">
                        <div class="lg:col-span-1 col-span-full order-2 lg:order-1">
                            <p
                                class="font-bold text-3xl text-green-500 dark:text-green-400 hover:text-blue-700 transition-all"
                            >
                                {{ projectItem.title }}
                            </p>
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
                </NuxtLink>
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
    {
        title: "Vuejs 3 and Typescript Course",
        link: "https://toplearn.com/c/6084",
        description:
            "The Vue.js 3 and TypeScript course is a comprehensive guide that covers all aspects, from basics to advanced topics like component composition and Pinia state management. It provides clear explanations and hands-on projects for mastering both Vue 3 and TypeScript, making it accessible for anyone looking to enhance their web development skills.",

        image: {
            src: "https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C_vuejs_3_%D8%A8%D8%A7_typescript.jpg",
            alt: "Vue 3 & Typescript Course",
        },

        stack: ["Typescript", "Vite", "Vue 3", "Pinia"],
    },
    {
        title: "Vuejs 3 and Typescript Todo App Course",
        link: "https://toplearn.com/c/6094",
        description:
            "This Todo App course delves into Vue 3, TypeScript, and Pinia to teach core concepts of creating applications, from project setup to task management functionalities. With a focus on practical examples, clear explanations, and hands-on projects, this course equips you with the skills needed to build efficient and functional todo apps.",

        image: {
            src: "https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%BE%D8%B1%D9%88%DA%98%D9%87_%D9%85%D8%AD%D9%88%D8%B1_to_do_list_%D8%A8%D8%A7_%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87_%D8%A7%D8%B2_vue_3_%D9%88_typescript.jpg",
            alt: "Vue 3 & Typescript Course",
        },

        stack: ["Typescript", "Vite", "Vue 3", "Pinia", "Todo"],
    },
    {
        title: "React and Typescript Course",
        link: "https://toplearn.com/c/6094",
        description:
            "This Todo App course delves into Vue 3, TypeScript, and Pinia to teach core concepts of creating applications, from project setup to task management functionalities. With a focus on practical examples, clear explanations, and hands-on projects, this course equips you with the skills needed to build efficient and functional todo apps.",

        image: {
            src: "https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C_react_%D9%88_typescript.jpg",
            alt: "React & Typescript Course",
        },

        stack: ["Typescript", "Vite", "React", "Zustand"],
    },
];
</script>
