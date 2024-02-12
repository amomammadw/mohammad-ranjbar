// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: ["@nuxt/ui", "@nuxt/content", "@nuxtjs/device", "@nuxt/image"],

    device: {
        refreshOnResize: true,
    },

    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
});