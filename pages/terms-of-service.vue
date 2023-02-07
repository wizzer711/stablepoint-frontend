<template>
  <div>
    <Resources />
    <Header
      :navigation-data="primaryNavigationData"
    />
    <Text
        :ribbon="legalData"
    />
    <Footer
      :navigation-data="footerNavigationData"
    />
    <GlobalLiveChat />
  </div>
</template>

<script setup lang="ts">

  import type { Strapi4Response } from '@nuxtjs/strapi'
  import { createError } from 'h3'
  import { Page } from '~/types/page'
  import { Hreflang } from '~/types/hreflangs'
  import { PrimaryNavigation, FooterNavigation } from '~/types/global/globalNavigation'

  const config = useRuntimeConfig()
  const { $sanitize } = useNuxtApp()

  // Get page data
  const route = useRoute()
  const { find } = useStrapi4()
  const slug = (route.params.slug != '') ? route.params.slug : 'homepage'
  const publicationState = route.query.slug ? 'preview' : 'live'
  let data = await find<Strapi4Response<Page>>(
    'pages',
    {
      'populate': 'deep',
      publicationState: publicationState,
      'filters[slug]': 'terms-of-service',
    }
  )
  const metaDetails = useGet(data.data[0], 'seo', null)
  data = useGet(data.data[0], 'ribbons', null)

  let { data: legalData } = await useFetch(`${config.public.STRAPI_URL_GLOBAL}/api/legals?populate=*&filters[slug]=terms-of-services`)
  legalData = isNull(legalData.value) ? {} : legalData.value.data[0]

  // Get primary navigation data
  let primaryNavigationData = await find<Strapi4Response<PrimaryNavigation>>(
    'primary-navigation',
    {
      'populate': 'deep',
      publicationState: publicationState
    }
  )
  primaryNavigationData = useGet(primaryNavigationData.data, 'navItem' , null)

  // Get footer navigation data
  let footerNavigationData = await find<Strapi4Response<FooterNavigation>>(
    'footer-navigation',
    {
      'populate': 'deep',
      publicationState: publicationState
    }
  )
  footerNavigationData = useGet(footerNavigationData.data, 'navItem' , null)

  // Throw 404 if page not found
  const noData = isEmpty(legalData)
  const noPrimaryNavigation = isEmpty(primaryNavigationData)
  const noFooterNavigation = isEmpty(footerNavigationData)
  if(noData || noPrimaryNavigation || noFooterNavigation){
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
    })
  }

  // Get global brand details and put into store
  let { data: globals } = await useFetch(`${config.public.STRAPI_URL_GLOBAL}/api/brand-details?populate=deep&filters[brand]=${config.public.BRAND}`)
  globals = isNull(globals.value) ? {} : useGet(globals.value.data[0], 'details', {})
  useState('brandDetails', () => globals)

  // Set MetaDetails
  const metaTitle = useGet(metaDetails, 'metaTitle', config.public.BRAND)
  const metaDescription = useGet(metaDetails, 'metaDescription', '')
  const metaRobots = useGet(metaDetails, 'metaRobots', 'index, follow')

  // Get hreflang language data
  const hreflangFilter = useGet(data, 'hreflangOverride', slug)
  let { data: hreflangsData } = await useFetch(`${config.public.STRAPI_URL_GLOBAL}/api/hreflang-mappings?populate=*&filters[slug]=${hreflangFilter}`)
  hreflangsData = isNull(hreflangsData.value) ? {} : useGet(hreflangsData.value.data[0], 'hreflangs', {})

  let hreflangTags: Array<Hreflang> = []
  useForEach(hreflangsData, (hreflang: any) => {
    hreflangTags.push({
      rel: 'alternate',
      href: hreflang.url,
      hreflang: hreflang.language
    })
  })

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
    title: $sanitize(metaTitle),
    description: $sanitize(metaDescription),
    robots: $sanitize(metaRobots),
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1',
    ogTitle: $sanitize(metaTitle),
    ogDescription: $sanitize(metaDescription),
    ogSiteName: config.public.BRAND,
    ogType: 'website',
    ogUrl: `${config.public.BRAND_DOMAIN}${route.fullPath}`,
    ogImage: '',
    ogImageWidth: 400,
    ogImageHeight: 400,
    twitterCard: 'summary',
  })

  useHead({
    link: useConcat(linkTags, hreflangTags)
  })

</script>