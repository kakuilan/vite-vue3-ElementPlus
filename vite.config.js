import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置dev服务
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  resolve: {
    //别名,可以将文件打包的识别路径用别名进行替换,避免在文件引入别的组件的时候使用很长的相对路径
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.join(__dirname, 'src'),
      // eslint-disable-next-line no-undef
      '~': path.join(__dirname, 'node_modules'),
      // eslint-disable-next-line no-undef
      api: path.resolve(__dirname, 'src/api'),
      // eslint-disable-next-line no-undef
      components: path.resolve(__dirname, 'src/components'),
      // eslint-disable-next-line no-undef
      image: path.resolve(__dirname, 'src/assets/image'),
      // eslint-disable-next-line no-undef
      styles: path.resolve(__dirname, 'src/styles'),
      // eslint-disable-next-line no-undef
      utils: path.resolve(__dirname, 'src/utils'),
      // eslint-disable-next-line no-undef
      views: path.resolve(__dirname, 'src/views')
    }
  },
  // 反向代理
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
})
