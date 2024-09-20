// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: ["@nuxt/ui",  "@nuxtjs/device", "@nuxt/image"],

    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],

    app: {
        head: {
            title: "Mohammad Ranjbar - Frontend Developer",
            htmlAttrs: {
                lang: "en-US",
            },
            meta: [
                {
                    name: "description",
                    content: "Mohammad Ranjbar Senior Frontend developer",
                },
            ],
        },
    },
});
