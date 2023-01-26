<template>
  <div class="overflow-hidden bg-gray-100 py-16 lg:py-24">
    <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
      <div class="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div class="relative">
          <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ ribbon?.heading }}</h3>
          <p class="mt-3 text-lg text-gray-500">{{ ribbon?.description }}</p>
        </div>
        <div class="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
          <GlobalImage
            :image-element="ribbon?.image"
            mobile-src-set="360w"
            tablet-src-set="580w"
            desktop-src-set="640w"
            mobile-size="(max-width: 768px) 360px"
            tablet-size="(max-width: 1024px) 580px"
            desktop-size="50vw"
            :width="490"
            :height="60"
            class="relative mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RibbonData, Ribbon } from '~/types/selectRibbon'
  import { Juxtapose } from '~/types/juxtapose'

  interface JuxtaposeProps {
    ribbon: RibbonData & Ribbon<Juxtapose> | null
  }

  withDefaults(defineProps<JuxtaposeProps>(), {
    ribbon: null
  });
</script>