/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import typedCssModulesPlugin from 'vite-plugin-typed-css-modules';
import { qrcode } from 'vite-plugin-qrcode';
import { VitePWA } from 'vite-plugin-pwa';
import { manifest } from './manifest';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typedCssModulesPlugin(),
    qrcode(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest,
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
});
