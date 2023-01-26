<template>
  <div class="relative overflow-hidden bg-white dark:bg-gray-900 py-16">
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-lg">
        <h1>
          <span class="block text-center text-lg font-semibold text-indigo-600">{{ ribbon?.pre_heading }}</span>
          <span class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">{{ ribbon?.heading }}</span>
        </h1>
        <p class="mt-8 text-xl leading-8 text-gray-500">{{ ribbon?.intro }}</p>
      </div>
      <div
        class="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500"
        :class="{ 'text-left' : ribbon?.alignment == 'left', 'text-center': ribbon?.alignment == 'centre' }"
      >
        {{ ribbon?.description }}
        <div v-if="ribbon?.text_links" class="mt-6">
          <template v-for="link in ribbon.text_links" key="cta.id">
            <GlobalLink
              :link-element="link"
              :stretch="false"
              linkClass="no-underline inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
              />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RibbonData } from '~/types/selectRibbon'
  import { Text } from '~/types/text'
  
  interface TextProps {
    ribbon: RibbonData & Text | null
  }

  withDefaults(defineProps<TextProps>(), {
    ribbon: null
  });
</script>