import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import typedCssModulesPlugin from 'vite-plugin-typed-css-modules';
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), typedCssModulesPlugin(), qrcode()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
});
