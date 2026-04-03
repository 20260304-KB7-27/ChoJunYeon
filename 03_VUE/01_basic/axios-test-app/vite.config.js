import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    proxy: {
      "/api": {
        // tartge : 실제 요청을 보낼 백엔드 서버 주소
        target: "http://localhost:3000",

        // 요청 헤더의 Origin을 target 주소로 변경
        changeOrigin: true,

        // /api 경로 제거후 전달
        rewrite: (path) => path.replace
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
