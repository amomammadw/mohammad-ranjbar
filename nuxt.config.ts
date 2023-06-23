// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],

  app: {
    head: {
      title: "Mohammad Ranjbar - Frontend Developer",
      meta: [
        {
          name: "description",
          content: "Mohammad Ranjbar Senior Frontend developer",
        },
      ],
    },
  },
});
