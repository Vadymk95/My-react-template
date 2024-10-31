import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
        minify: 'esbuild',
        target: 'esnext'
    },
    resolve: {
        alias: {
            '@root': path.resolve(__dirname, './src')
        }
    }
});
