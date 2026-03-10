// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Rent My Room',
			sidebar: [
				{
					label: 'Rental Info',
					items: [
						{ label: 'Room Details', slug: 'room-details' },
						{ label: 'Contact & Location', slug: 'contact-location' },
					],
				},
			],
		}),
	],
});
