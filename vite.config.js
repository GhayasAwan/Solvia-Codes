import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Custom domain solvia.codes — root path
  build: {
    modulePreload: false, // Prevents Vite from auto-injecting modulepreload links for unused chunks
    cssCodeSplit: true,
    cssMinify: true,
    target: 'es2022',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Keep heavy 3D engine isolated so main paint is never delayed
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'vendor-three';
          }
        }
      }
    }
  }
});
