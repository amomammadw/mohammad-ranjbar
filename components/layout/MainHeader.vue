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
                    <template v-for="socialItem in headerRightLinks" :key="socialItem">
                        <UButton
                            color="gray"
                            variant="ghost"
                            target="_blank"
                            :to="socialItem.link"
                            :icon="socialItem.icon"
                            :aria-label="socialItem.text"
                        />
                    </template>
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

const headerRightLinks = [
    {
        icon: "i-mdi-linkedin",
        link: "https://www.linkedin.com/in/mohammad-ranjbar-15408518b/",
        text: "linkedin",
    },
    {
        icon: "i-mdi-github",
        link: "https://github.com/amomammadw82",
        text: "github",
    },
    {
        icon: "i-mdi-file-pdf-box",
        link: "",
        text: "resume",
    },
];
</script>
