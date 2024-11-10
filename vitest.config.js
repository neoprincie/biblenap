import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'),  // Point '~' to the 'app' directory
    },
  },
})