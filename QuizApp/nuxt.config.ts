// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/sass/main.scss",
  ],

  app: {
    head: {
      htmlAttrs: { dir: "rtl" },
    },
  },

  modules: ["@nuxt/icon"],
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
    ],
  },
});
