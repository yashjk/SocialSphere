import { sentryVitePlugin } from "@sentry/vite-plugin";
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "injosejoshigmailcom",
    project: "social-media-app"
  })],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    sourcemap: true
  }
});