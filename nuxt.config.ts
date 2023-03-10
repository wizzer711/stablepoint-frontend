import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    'nuxt-delay-hydration'
  ],
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  delayHydration: { 
    mode: 'init',
    debug: process.env.NODE_ENV === 'development'
  },
  publicRuntimeConfig: {
    public: {
      STRAPI_PREVIEW_SECRET: process.env.STRAPI_PREVIEW_SECRET,
      STRAPI_URL_GLOBAL: process.env.STRAPI_URL_GLOBAL,
      GTM_ID: process.env.GTM_ID,
      BRAND: process.env.BRAND,
      BRAND_DOMAIN: process.env.BRAND_DOMAIN
    }
  },
  build: {
    transpile: [
      '@headlessui/vue',
      '@heroicons/vue'
    ]
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.includes('upm-'),
    }
  },
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      script: [
        {
          innerHTML: "window.dataLayer = window.dataLayer || []; dataLayer = [{ 'event': 'toggleLiveChat', 'enabled': false }];"
        },
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','${process.env.GTM_ID}');`,
        }
      ],
      noscript: [
        {
          tagPosition: 'bodyOpen',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id='${process.env.GTM_ID}'" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }
      ]
    },
  },
})
