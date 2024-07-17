import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'src/assets/images/rusty-182k/rusty1.png',
        'src/assets/images/rusty-182k/rusty2.png',
        'src/assets/images/rusty-182k/rusty3.png',
        'src/assets/images/rusty-182k/rusty4.png',
        'src/assets/images/rusty-182k/rusty5.png',
        'src/assets/images/dusty-172h/dusty1.png',
        'src/assets/images/dusty-172h/dusty2.png',
        'src/assets/images/dusty-172h/dusty3.png',
        'src/assets/images/dusty-172h/dusty4.png',
        'src/assets/images/dusty-172h/dusty5.png',
        'src/assets/images/dusty-172h/dusty6.png',
        'src/assets/images/red/red1.png',
        'src/assets/images/red/red2.png',
        'src/assets/images/red/red3.png',
        'src/assets/images/red/red4.png',
        'src/assets/images/red/red5.png',
        'src/assets/images/red/red6.png',
        'src/assets/images/red/red7.png',
        'src/assets/images/red/red8.png',
        'src/assets/images/red/red9.png'
      ],
      manifest: {
        name: 'Community Aerosports',
        short_name: 'Community Aerosports',
        description: 'An expert flight instructor based in Farmington, NM',
        icons: [
          {
            src: './logo.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
              },
            },
          },
        ],
      },
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});