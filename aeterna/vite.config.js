import { defineConfig } from 'vite';

export default defineConfig({
    // GitHub Pagesのリポジトリ名に合わせてベースパスを設定する必要がある場合がある
    // 今回はカスタムドメインやルート公開を想定して '/' のままとするが、
    // サブディレクトリ公開なら '/hanaeru0117.github.io/' 等が必要になる可能性あり
    base: './',

    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // ソースマップはデバッグ用に有効化しても良い
        sourcemap: false,
    },

    server: {
        port: 5173,
        open: true,
    }
});
