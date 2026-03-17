import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const normalizeBasePath = (basePath?: string) => {
  const trimmedBasePath = basePath?.trim();

  if (!trimmedBasePath || trimmedBasePath === '/') {
    return '/';
  }

  const withoutTrailingSlash = trimmedBasePath.replace(/\/+$/, '');
  return withoutTrailingSlash.startsWith('/')
    ? `${withoutTrailingSlash}/`
    : `/${withoutTrailingSlash}/`;
};

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const base = normalizeBasePath(process.env.VITE_BASE_PATH ?? env.VITE_BASE_PATH);

  return {
    base,
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // 通过环境变量关闭热更新，避免在特定编辑环境中出现频繁刷新。
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
