import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";
import vercel from '@astrojs/vercel/serverless';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    output: 'server',
    adapter: vercel(),
    integrations: [
		svelte(),
		pagefind()
	],
});