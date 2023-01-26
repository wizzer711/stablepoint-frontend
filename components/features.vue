<template v-if="ribbon.features">
  <div class="py-12 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 v-if="ribbon?.pre_heading" class="text-base text-indigo-600 font-semibold tracking-wide uppercase">{{ ribbon?.pre_heading }}</h2>
        <p v-if="ribbon?.heading" class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{{ ribbon?.heading }}</p>
        <p v-if="ribbon?.description" class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{{ ribbon?.description }}</p>
      </div>
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in ribbon?.features" :key="feature.id" class="relative">
            <dt :class="{ 'flex items-center': !feature.description }">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-gray-900 dark:text-white">
                <!-- <GlobalImage
                  :image-element="feature.icon"
                  mobile-src-set="360w"
                  tablet-src-set="580w"
                  desktop-src-set="640w"
                  mobile-size="(max-width: 768px) 360px"
                  tablet-size="(max-width: 1024px) 580px"
                  desktop-size="50vw"
                  :width="60"
                  :height="60"
                /> -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z" clip-rule="evenodd" />
                </svg>
              </div>
              <p v-if="feature.heading" class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{{ feature.heading }}</p>
            </dt>
            <dd v-if="feature.description" class="mt-2 ml-16 text-base text-gray-500 dark:text-white ">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RibbonData, Ribbon } from '~/types/selectRibbon'
  import { Feature } from '~/types/features'

  interface FeaturesProps {
    ribbon: RibbonData & Ribbon<Array<Feature>> | null
  }

  withDefaults(defineProps<FeaturesProps>(), {
    ribbon: null
  });
</script>