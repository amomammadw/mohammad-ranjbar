// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image"],

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
