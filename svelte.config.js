import cloudflare from '@sveltejs/adapter-cloudflare'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],

	kit: {
		adapter: cloudflare()
	}
};

export default config;
