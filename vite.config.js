import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import chunkSplitPlugin from 'your-module-path/chunkSplitPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), chunkSplitPlugin()],
})
