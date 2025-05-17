import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/channels': {
        target: 'https://carbackend-fc3t.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
