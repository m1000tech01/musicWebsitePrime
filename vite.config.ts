import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is "/" for local dev. When you set up GitHub Pages deploy later you'll
// likely change base (and output to docs/). See DEFERRED notes in the rebuild.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    open: false,
  },
})
