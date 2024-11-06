import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
	site: 'https://animals.glogow.pl',
	integrations: [
		tailwind({
			config: { optimizeCss: true }
		}),
		sitemap(),
		compress({
			html: true,
			css: true,
			js: true,
			img: false,
			svg: true
		})
	],
	vite: {
		build: {
			cssCodeSplit: true,
			chunkSizeWarningLimit: 500,
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ['/src/scripts/mobileMenu.ts', '/src/scripts/parallax.ts']
					}
				}
			}
		},
		ssr: {
			noExternal: ['@astrojs/tailwind']
		}
	}
});