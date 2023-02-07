<template>
  <div>
    <Resources />
    <Header
      :navigation-data="primaryNavigationData"
    />
    <div class="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div class="mx-auto max-w-max">
        <main class="sm:flex">
          <p v-if="errorPreHeading" class="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">{{ errorPreHeading }}</p>
          <div class="sm:ml-6">
            <div class="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 v-if="errorHeading" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{ errorHeading }}</h1>
              <p v-if="errorDescription" class="mt-1 text-base text-gray-500">{{ errorDescription }}</p>
            </div>
            <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <button @click="returnHome" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Go back home</button>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Footer
      :navigation-data="footerNavigationData"
    />
  </div>
</template>

<script setup lang="ts">

import type { Strapi4Response } from '@nuxtjs/strapi'
import { PrimaryNavigation, FooterNavigation } from '~/types/global/globalNavigation'

const config = useRuntimeConfig()
const { $sanitize } = useNuxtApp()
const route = useRoute()
const { find } = useStrapi4()
const errorProps = defineProps({
  error: Object
})

let errorMetaTitle = '';
let errorPreHeading = '';
let errorHeading = '';
let errorDescription = '';

if(errorProps.error.statusCode == 404 || errorProps.error.statusCode == '404'){
  errorMetaTitle = "404 Response Error Page";
  errorPreHeading = '404';
  errorHeading = 'Content not found';
  errorDescription = "Oh no we couldn't find the page you were looking for";
}else if(errorProps.error.statusCode == 403 || errorProps.error.statusCode == '403'){
  errorMetaTitle = "403 Response Error Page";
  errorPreHeading = '403';
  errorHeading = 'Forbidden page';
  errorDescription = "Hmm, awkward. You're not allowed to visit the requested page or perform the requested action.";
}else{
  errorMetaTitle = "500 Internal Error Page";
  errorPreHeading = '500';
  errorHeading = 'Internal Server Error';
  errorDescription = "Hmm, awkward. We seem to be having problems.";
}

const returnHome = () => clearError({ redirect: '/' })

// Get primary navigation data
let primaryNavigationData = await find<Strapi4Response<PrimaryNavigation>>(
    'primary-navigation',
    {
      'populate': 'deep'
    }
  )
  primaryNavigationData = useGet(primaryNavigationData.data, 'navItem' , null)

  // Get footer navigation data
  let footerNavigationData = await find<Strapi4Response<FooterNavigation>>(
    'footer-navigation',
    {
      'populate': 'deep'
    }
  )
  footerNavigationData = useGet(footerNavigationData.data, 'navItem' , null)

  const linkTags = [
    {
      rel: 'home',
      href: config.public.BRAND_DOMAIN
    },
    {
      rel: 'canonical',
      href: `${config.public.BRAND_DOMAIN}${route.fullPath}`
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/assets/favicons/32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/assets/favicons/16x16.png',
      sizes: '16x16'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      href: '/assets/favicons/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'alternate',
      href: `${config.public.BRAND_DOMAIN}${route.fullPath}`,
      hreflang: 'x-default'
    }
  ]

  useServerSeoMeta({
    title: $sanitize(errorMetaTitle),
    description: $sanitize(errorDescription),
    robots: 'noindex, nofollow',
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1'
  })

  useHead({
    link: linkTags
  })

</script>