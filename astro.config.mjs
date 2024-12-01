import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";
import vercelStatic from '@astrojs/vercel/static';

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
});