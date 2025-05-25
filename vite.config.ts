import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'

let basePath = '/'
try {
  const configPath = './build-config.json'
  if (fs.existsSync(configPath)) {
    const buildConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    basePath = buildConfig.basePath || '/'
  }
} catch (e) {
  console.log('Using default base path:', basePath)
}

export default defineConfig({
  base: basePath,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
