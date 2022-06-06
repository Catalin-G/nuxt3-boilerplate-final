import {defineNuxtConfig} from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: require('./postcss.config')
        },
    },
    css: [
        '~/assets/css/tailwind.css'
    ],
    head: {
        title: 'Shoplab',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Shopify Experts agency based in Munich, Germany. We provide high quality software development and optimize the conversion rate of your online store. '
            }
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    }
});
