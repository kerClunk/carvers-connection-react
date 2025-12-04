import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/**
 * Vite config for building the embeddable header component
 * Outputs a single IIFE bundle that can be loaded on any WordPress page
 */
export default defineConfig({
  plugins: [react()],

  // Define process.env for browser compatibility
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': JSON.stringify({}),
  },

  build: {
    // Output to a separate directory
    outDir: 'dist-embed',

    // Library mode configuration
    lib: {
      // Entry point for the embed bundle
      entry: path.resolve(__dirname, 'src/embed/entry.tsx'),

      // Global variable name (for IIFE format)
      name: 'CCHeader',

      // Output formats - IIFE is best for script tag inclusion
      formats: ['iife'],

      // Output filename
      fileName: () => 'cc-header.min.js',
    },

    rollupOptions: {
      // Don't externalize React - bundle it for standalone use
      // This means WordPress doesn't need React installed
      external: [],

      output: {
        // Rename CSS file to cc-header.min.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'cc-header.min.css';
          }
          // Only keep the logo, exclude other assets
          if (assetInfo.name === 'LogoCC.webp') {
            return '[name][extname]';
          }
          return 'assets/[name][extname]';
        },

        // Inline dynamic imports (we want a single file)
        inlineDynamicImports: true,
      },
    },

    // Only copy necessary assets
    copyPublicDir: false,

    // Minify for production (use esbuild, which is built into Vite)
    minify: 'esbuild',

    // Generate sourcemaps for debugging
    sourcemap: true,

    // Don't empty the output directory (in case other builds are there)
    emptyOutDir: true,
  },

  // CSS configuration - inline PostCSS plugins to use embed-specific Tailwind config
  css: {
    postcss: {
      plugins: [
        tailwindcss({ config: './tailwind.config.embed.js' }),
        autoprefixer(),
      ],
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
