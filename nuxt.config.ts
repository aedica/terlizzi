// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~~/assets/css/app.pcss", "~~/assets/css/tailwind.pcss"],
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image"],
  content: {},
  image: {},
});
