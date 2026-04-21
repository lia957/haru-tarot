import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'haru-tarot',
  brand: {
    displayName: '하루타로',
    primaryColor: '#3D1580',
    icon: 'https://lia957.github.io/wedding/tarot-logo.png',
},
  wweb: {
    host: 'localhost',
    port: 5173,
    commands: {
        dev: 'vite',
        build: 'vite build',
    },
},
  permissions: [],
  outdir: 'dist',
});
