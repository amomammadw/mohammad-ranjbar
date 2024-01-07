// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxt/content"],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
});
