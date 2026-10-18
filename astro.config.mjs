// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Replace 'your-username' with your GitHub username 
  // and 'my-site' with the exact name of your GitHub repository
  site: 'https://carlpestilos.github.io',
  base: '/portfolio', 
  integrations: [tailwind()],
});