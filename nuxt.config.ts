// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    registerWebManifestInRouteRules: true,
    manifest: {
      name: "Mohammad Ranjbar",
      short_name: "Mohammad Ranjbar",
      description: "Mohammad Ranjbar Frontend Engineer",
      icons: [
        {
          src: "icons/android-icon-36x36.png",
          sizes: "36x36",
          type: "image/png",
        },
        {
          src: "icons/android-icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "icons/android-icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icons/android-icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "icons/android-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/android-icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      runtimeCaching: [
        {
          urlPattern: ({ url }) =>
            url.pathname === "https://mohammad-ranjbar.vercel.app/",
          handler: "CacheFirst",
          options: {
            cacheName: "route-cache",
          },
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

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
