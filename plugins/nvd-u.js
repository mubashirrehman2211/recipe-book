import U from "nvd-u";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(U);
});
