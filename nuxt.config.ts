// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["@testing-library/jest-dom/vitest"],
      },
    },
  },
})
