# Nuxt 3 / TailwindCSS / ESLint / Prettier Boilerplate

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Prettier/ESLint/Tailwind

Add dependencies

```bash
# yarn
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest @nuxtjs/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-prettier eslint eslint-plugin-prettier eslint-plugin-vue prettier vite-plugin-eslint
```

## Tailwind Setup

Create Tailwind config file
```bash
npx tailwindcss init -p
```

Add Tailwind config
```bash
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
```

```bash
#Create a new file assets/css/tailwind.css and add the following:

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
#Open up nuxt.config.js and add the following:

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
    export default defineNuxtConfig({
      build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
      },
      css: [
        "~/assets/css/tailwind.css"
      ],
    })
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
