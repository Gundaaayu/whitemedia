// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  css: [
    "@/assets/css/styles.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error because this can beldjksf
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@hypernym/nuxt-anime",
    //...
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
