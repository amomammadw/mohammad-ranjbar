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
