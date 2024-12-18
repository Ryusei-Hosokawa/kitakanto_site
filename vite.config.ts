import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages のリポジトリ名に合わせて設定
export default defineConfig({
  base: '/kitakanto_site/',
  plugins: [react()],
  server: {
    host: "localhost",
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  }
});
