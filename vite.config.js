import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置host
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  resolve: {
    //别名
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.join(__dirname, 'src'),
      // eslint-disable-next-line no-undef
      '~': path.join(__dirname, 'node_modules')
    }
  }
})
