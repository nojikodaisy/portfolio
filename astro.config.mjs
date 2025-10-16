import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nojikodaisy.github.io',
  base: '/portfolio',
  integrations: [
    react({
      include: ['**/react/**']
    }), 
    vue(), 
    svelte(), 
    tailwind()
  ],
  output: 'static',
  vite: {
    esbuild: {
      jsx: 'automatic'
    }
  }
});