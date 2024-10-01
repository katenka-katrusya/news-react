import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        // Используем современный API
        api: 'modern-compiler',
      },
      scss: {
        api: 'modern-compiler', // Или "modern", "legacy"
      },
    },
  },
})
