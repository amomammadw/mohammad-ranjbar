<template>
    <header class="border-b py-5 border-b-slate-700">
        <UContainer>
            <nav class="flex justify-between">
                <ul class="flex space-x-3 text-green-600">
                    <template v-for="linkItem in navLinks" :key="linkItem.link">
                        <li>
                            <UButton variant="link" color="gray">{{ linkItem.text }}</UButton>
                        </li>
                    </template>
                </ul>

                <div class="space-x-3 items-center flex">
                    <ToggleTheme />
                </div>
            </nav>
        </UContainer>
    </header>
</template>

<script setup lang="ts">
const navLinks = [
    {
        text: "About me",
        link: "#about",
    },
    {
        text: "Skills",
        link: "#skills",
    },
    {
        text: "Projects",
        link: "#projects",
    },
    {
        text: "Contact me",
        link: "#contact",
    },
];
</script>
