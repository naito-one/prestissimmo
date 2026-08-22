import tailwindcss from '@tailwindcss/vite'
import { defineLocalBusiness } from 'nuxt-schema-org/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    'nuxt-auth-utils',
    'nuxt-workmailer',
  ],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },

  colorMode: {
    preference: 'light',
  },

  nodemailer: {
    from: 'support@naito.one',
    host: 'mail.infomaniak.com',
    port: 465,
    secure: true,
    auth: {
      user: 'support@naito.one',
      pass: process.env.NUXT_NODEMAILER_AUTH_PASS,
    },
  },

  /*
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'rent',
        path: '/rent',
        file: '~/pages/index.vue',
      })
    },
  },
  */

  runtimeConfig: {
    adminPassword: process.env.NUXT_ADMIN_PASSWORD,
    contactTo: process.env.NUXT_CONTACT_TO,
    public: {
      enableNewsletter: false,
    },
  },

  nitro: {
    preset: 'cloudflare_module',
    experimental: {
      tasks: true,
      openAPI: true,
    },
  },

  compatibilityDate: '2026-08-21',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    // D1 database
    db: {
      dialect: 'sqlite',
      applyMigrationsDuringBuild: false,
    },
    // R2 bucket
    blob: true,
  },

  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  schemaOrg: {
    identity: defineLocalBusiness({
      '@type': 'RealEstateAgent', // Choose from https://schema.org/LocalBusiness#subtypes

      logo: '/img/logo.svg',
      telephone: '+41 78 711 88 04',
      email: 'info@prestissimmo.ch',
      areaServed: 'Jura, Berne',
      sameAs: ['https://www.facebook.com/people/PrestissIMMO/61580309296481/'],

      // Location (Required)
      address: {
        streetAddress: 'Rue des Chênes 48M',
        addressLocality: 'Boécourt',
        addressRegion: 'JU',
        postalCode: '2856',
        addressCountry: 'CH',
      },
    }),
  },

  i18n: {
    baseUrl: 'https://prestissimmo.ch',
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'fr',
        language: 'fr-CH',
        file: 'fr.ts',
      },
    ],
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
})
