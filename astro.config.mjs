import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import { visualizer } from "rollup-plugin-visualizer";
import pagefind from "astro-pagefind";

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
	output: 'static',
	adapter: vercelStatic(),
    integrations: [
		svelte(),
		pagefind()
	],
	vite: {
		plugins: [visualizer({
			emitFile: true,
			filename: "stats.html",
		})]
	}
});