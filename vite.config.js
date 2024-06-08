import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ registerType: 'autoUpdate',
    devOptions: {enabled: true,},
    injectRegister: 'auto',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
      name: 'PWA REACT AND VITE',
      short_name: 'PWA REACT',
      description: 'React and Vite + PWA',
      theme_color: '#ffffff',
      
    }
   }),
  ],
})
