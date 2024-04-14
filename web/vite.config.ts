import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sass from 'vite-plugin-sass'
import path from "path"
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sass(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "src/assets/styles/var.scss";'
      }
    }
  },
})
