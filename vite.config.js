import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://lucadonadello.github.io/personalPortfolio3D/",
  plugins: [react()],
})
