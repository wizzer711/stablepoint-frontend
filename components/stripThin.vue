<template>
  <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl py-6 px-6 lg:px-8">
      <p class="text-center text-base font-semibold text-gray-500">{{ ribbon?.heading }}</p>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
        <div v-for="icon in ribbon?.strip_icons" :key="icon.id">
          <a :href="icon.link" target="_blank" class="flex items-center">
            <GlobalImage
              :image-element="icon.icon"
              mobile-src-set="360w"
              tablet-src-set="580w"
              desktop-src-set="640w"
              mobile-size="(max-width: 768px) 360px"
              tablet-size="(max-width: 1024px) 580px"
              desktop-size="50vw"
              image-class="block h-16"
              :width="60"
              :height="60"
            />
            <p class="ml-4 text-sm font-semibold text-white">{{ icon.heading }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RibbonData, Ribbon } from '~/types/selectRibbon'
  import { StripIcons } from '~/types/strip'
  
  interface TextProps {
    ribbon: RibbonData & Ribbon<Array<StripIcons>> | null
  }

  withDefaults(defineProps<TextProps>(), {
    ribbon: null
  });
</script>