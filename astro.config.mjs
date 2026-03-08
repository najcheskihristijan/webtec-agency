// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: 'https://webtecagency-seotest.store',
    trailingSlash: 'never',
    build: {
        format: 'file'
    },
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    integrations: [],
    vite: {
        plugins: [tailwindcss()]
    },
});
