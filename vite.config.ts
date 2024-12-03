import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { OutputAsset, OutputChunk, PreRenderedAsset } from 'rollup';

// GitHub Pages のリポジトリ名に合わせて設定
export default defineConfig({
  base: '/kitakanto_site/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    }
  }
});
