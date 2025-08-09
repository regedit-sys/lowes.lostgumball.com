import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                tv: 'pages/videos/tv-index.html',
                video: 'pages/videos/video-index.html',
        },
    },
  },
  base: '/', // for GitHub Pages
})
