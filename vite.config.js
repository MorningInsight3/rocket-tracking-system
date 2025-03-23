// vite.config.js
export default {
  // 基本公共路径
  base: './',
  
  // 构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  
  // 开发服务器配置
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  
  // 解析配置
  resolve: {
    alias: {
      // 可以在这里添加路径别名
    }
  }
};
