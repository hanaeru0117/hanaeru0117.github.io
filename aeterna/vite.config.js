import { defineConfig } from 'vite';

export default defineConfig({
    // GitHub Pagesのルート公開またはカスタムドメイン運用を想定
    base: './',

    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
    },

    server: {
        port: 5173,
        open: true,
    }
});
