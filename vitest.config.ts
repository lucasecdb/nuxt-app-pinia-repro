import { fileURLToPath } from "node:url";
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: 'nuxt',
    globals: true,
    setupFiles: [fileURLToPath(new URL("./setup.ts", import.meta.url))],
  },
})
