import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';
import config from './postcss.config';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Shoplab',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Shopify Experts agency based in Munich, Germany. We provide high quality software development and optimize the conversion rate of your online store. '
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  typescript: {
    strict: true
  },
  vite: {
    plugins: [eslintPlugin()]
  },
  build: {
    postcss: {
      postcssOptions: config
    }
  },
  css: ['~/assets/css/tailwind.css']
});
