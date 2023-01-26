<template>
  <div class="bg-white dark:bg-gray-900">
      <div class="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div class="text-center">
            <p v-if="ribbon?.heading" class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{{ ribbon?.heading }}</p>
            <p v-if="ribbon?.description" class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{{ ribbon?.description }}</p>
            <div class="relative">
              <div class="absolute">
                <img loading="lazy" class="mx-auto" alt="Map" src="/assets/map/map.png" />
              </div>
              <div class="mx-auto max-w-5xl relative py-16 px-6 sm:py-24 lg:py-48 lg:px-8 grid grid-cols-3 gap-3">
                <div class="flex">
                  <img loading="lazy" width="20" height="20" class="mr-4" alt="East Coast, USA" src="/assets/map/flags/usa.svg"/>
                  <span class="block text-gray-900">East Coast, USA</span>
                </div>
                <div class="flex">
                  <img loading="lazy" width="20" height="20" class="mr-4" alt="West Coast, USA" src="/assets/map/flags/usa.svg"/>
                  <span class="block text-gray-900">West Coast, USA</span>
                </div>
                <div class="flex">
                  <img loading="lazy" width="20" height="20" class="mr-4" alt="Central Europe" src="/assets/map/flags/europe.svg"/>
                  <span class="block text-gray-900">Central Europe</span>
                </div>
                <div class="flex">
                  <img loading="lazy" width="20" height="20" class="mr-4" alt="Singapore" src="/assets/map/flags/singapore.svg"/>
                  <span class="block text-gray-900">Singapore</span>
                </div>
                <div class="flex">
                  <img loading="lazy" width="20" height="20" class="mr-4" alt="India" src="/assets/map/flags/india.svg"/>
                  <span class="block text-gray-900">India</span>
                </div>
                <div class="flex">
                  <img loading="lazy" width="20" height="20" class="mr-4" alt="Sydney, Australia" src="/assets/map/flags/australia.svg"/>
                  <span class="block text-gray-900">Sydney, Australia</span>
                </div>
                <div class="flex">
                  <img loading="lazy" width="20" height="20" class="mr-4" alt="London, United Kingdom" src="/assets/map/flags/uk.svg"/>
                  <span class="block text-gray-900">London, United Kingdom</span>
                </div>
              </div>
          </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  import { RibbonData, Ribbon } from '~/types/selectRibbon'
  import { Map } from '~/types/map'
  
  interface MapProps {
      ribbon: RibbonData & Ribbon<Map> | null
  }

  withDefaults(defineProps<MapProps>(), {
      ribbon: null
  });
</script>