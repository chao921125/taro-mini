import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// This configuration addresses the Sass compatibility issue with Vite 7.0.5 and Sass 1.89.2
// The error: "TypeError: Instance of 'JSArray<dynamic>': type 'JSArray<dynamic>' is not a subtype of type 'JSImporter'"
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        // Fix for the JSArray/JSImporter issue in Sass 1.89.2
        // This configuration provides an empty array for importers which prevents the type mismatch
        importers: [],

        // Add any additional Sass options if needed
        // For example, you might want to add global variables or mixins
        // additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});
