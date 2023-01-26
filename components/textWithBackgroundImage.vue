<template>
  <div class="relative bg-indigo-800">
    <div class="absolute inset-0">
      <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
      <div class="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div class="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{{ ribbon?.heading }}</h1>
      <p class="mt-6 max-w-3xl text-xl text-indigo-100">{{ ribbon?.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { RibbonData, Ribbon } from '~/types/selectRibbon'
    import { TextWithBackgroundImage } from '~/types/text'
    
    interface TextProps {
        ribbon: RibbonData & Ribbon<TextWithBackgroundImage> | null
    }

    withDefaults(defineProps<TextProps>(), {
      ribbon: null
    });
</script>