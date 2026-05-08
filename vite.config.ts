import { defineConfig } from 'vite';

// GitHub user site (https://jameslyu2001.github.io/) is served from repo root; base stays '/'.
// If you ever use project pages instead, set base to '/repo-name/'.
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        cv: 'cv.html',
        research: 'research.html',
        teaching: 'teaching.html',
        contact: 'contact.html',
      },
    },
  },
});
