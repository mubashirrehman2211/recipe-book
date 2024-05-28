// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  devtools: { enabled: false },
  css: ["nvd-u/u-core.scss"],
  components: [
    { path: "components", pathPrefix: false },
    { path: "node_modules/nvd-u/components", pathPrefix: false },
  ],
});
