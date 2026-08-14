import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://antiokh.ru',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
