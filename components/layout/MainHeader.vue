<template>
    <header class="w-full top-0 py-5 backdrop-blur-lg z-50" :class="showMobileMenu ? 'fixed' : 'sticky'">
        <UContainer>
            <nav class="flex justify-between">
                <ul class="flex space-x-3 text-green-600" v-if="useDevice().isDesktop">
                    <template v-for="linkItem in navLinks" :key="linkItem.link">
                        <li>
                            <UButton variant="link" color="gray" :to="linkItem.link">{{ linkItem.text }}</UButton>
                        </li>
                    </template>
                </ul>

                <!-- * theme and social links -->
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

                <UButton
                    :icon="showMobileMenu ? 'i-mdi-close' : 'i-mdi-menu'"
                    variant="ghost"
                    v-if="useDevice().isMobile"
                    @click="showMobileMenu = !showMobileMenu"
                />
            </nav>
        </UContainer>

        <div v-if="showMobileMenu" class="h-dvh container w-full backdrop-blur-lg">Header Items</div>
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
    {
        text: "Blog",
        link: "/",
    },
];

const showMobileMenu = ref(false);

const headerRightLinks = [
    {
        icon: "i-mdi-linkedin",
        link: "https://www.linkedin.com/in/mohammad-ranjbar-15408518b/",
        text: "linkedin",
    },
    {
        icon: "i-mdi-github",
        link: "https://github.com/amomammadw",
        text: "github",
    },
    {
        icon: "i-mdi-file-pdf-box",
        link: "",
        text: "resume",
    },
];
</script>
