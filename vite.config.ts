import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import cssInjected from 'vite-plugin-css-injected-by-js'
import glslify from "rollup-plugin-glslify";
import { fileURLToPath, URL } from "node:url";
import { replaceNamedImportsFromGlobals } from './vite-plugin-replace-imports';

export default defineConfig({
  plugins: [vue(), vueJsx(), cssInjected(),
    replaceNamedImportsFromGlobals({
      pinia: ['defineStore',"storeToRefs"],
      vuetify: ['useTheme']
    })
  ],
   define: {
    "process.env": {
      BASE_URL: "/",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'SegmentationApp',
      formats: ['umd'],
      fileName: (format)=>`my-app.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'vuetify', 'pinia'], 
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify',
          pinia: 'Pinia',
        },
      },
    },
  },
});

