<template>
  <div class="bg-gray-800 dark:bg-white">
    <div class="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
      <div class="lg:w-0 lg:flex-1">
        <h2 v-if="ribbon?.heading" class="text-3xl font-bold tracking-tight sm:text-4xl text-white dark:text-gray-900" id="newsletter-headline">{{ ribbon?.heading }}</h2>
        <p v-if="ribbon?.description" class="mt-3 max-w-2xl text-lg leading-6 text-gray-300 dark:text-gray-900">{{ ribbon?.description }}</p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form class="sm:flex">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email-address" type="email" autocomplete="email" required="" class="w-full rounded-md border border-transparent px-5 py-3 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs bg-white dark:bg-secondary text-gray-500 dark:text-white placeholder-gray-500 dark:placeholder-white" placeholder="Find your perfect domain..." />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-900 hover:bg-primary-500 px-5 py-3 text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">Search</button>
          </div>
        </form>
        <!-- <p class="mt-3 text-sm text-gray-300">
          We care about the protection of your data. Read our
          {{ ' ' }}
          <a href="#" class="font-medium text-white underline">Privacy Policy.</a>
        </p> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RibbonData } from '~/types/selectRibbon'
  import { Strip } from '~/types/strip'
  
  interface StripDomainSearchProps {
    ribbon: RibbonData & Strip | null
  }

  withDefaults(defineProps<StripDomainSearchProps>(), {
    ribbon: null
  });
</script>