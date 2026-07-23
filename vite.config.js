import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite performance plugin for Render-Blocking CSS removal & Parallel Font Preloading
function optimizeHtmlPlugin() {
  return {
    name: 'optimize-html-plugin',
    transformIndexHtml(html, ctx) {
      let transformedHtml = html;

      // 1. Transform render-blocking CSS links into async preloaded stylesheets with noscript fallback
      transformedHtml = transformedHtml.replace(
        /<link rel="stylesheet" crossorigin href="(.*?)">/g,
        '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$1"></noscript>'
      );

      // 2. Inject direct parallel font preloads into <head> for critical woff2 fonts
      if (ctx && ctx.bundle) {
        const fontFiles = Object.keys(ctx.bundle).filter(
          fileName => fileName.endsWith('.woff2') && (fileName.includes('inter-latin-400') || fileName.includes('outfit-latin-700'))
        );
        
        const fontPreloads = fontFiles
          .map(file => `<link rel="preload" href="/${file}" as="font" type="font/woff2" crossorigin>`)
          .join('\n    ');

        if (fontPreloads) {
          transformedHtml = transformedHtml.replace(
            '<!-- Icons & Fonts Preconnect -->',
            `<!-- Critical Font Preloads (Parallel Network Chain Fix) -->\n    ${fontPreloads}\n\n    <!-- Icons & Fonts Preconnect -->`
          );
        }
      }

      return transformedHtml;
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), optimizeHtmlPlugin()],
  base: '/', // Custom domain solvia.codes — root path
  build: {
    modulePreload: false, // Disables auto-injecting modulepreload headers for non-critical JS chunks
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
