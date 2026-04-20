import { defineConfig } from 'astro/config';

// We are moving to a static build for maximum edge performance
export default defineConfig({
  // No 'output' key defaults to 'static'
  site: 'https://thesegmentednerd.com'
});
