import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueJsx(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '0.0.0.0',  // 域名设置
    port: 3000,
  }
})

// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://www.deepseek.com',
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' },  // 代理时将 "/api" 替换为空
//       },
//     },
//   },
// };
