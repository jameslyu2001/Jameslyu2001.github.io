import { defineConfig } from 'vite';

// Replace with your actual GitHub repo name if different
const repoName = 'james-lyu-website';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        cv: 'cv.html',
        research: 'research.html',
        teaching: 'teaching.html',
      },
    },
  },
});
