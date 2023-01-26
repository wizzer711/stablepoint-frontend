<template>

      <div>
        <!-- Hero card -->
        <div class="relative">
          <!-- <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" /> -->
          <div class="">
            <div class="relative sm:overflow-hidden">
              <div v-if="ribbon?.image.url" class="absolute inset-0">
                <!-- <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" /> -->
                <img class="h-full w-full object-cover" :src="ribbon?.image.url" alt="People working on laptops" />
                <!-- <div class="absolute inset-0" /> -->
              </div>
              <div class="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl max-w-2xl mx-auto">
                  <span class="block text-gray-900">{{ ribbon?.heading }}</span>
                </h1>
                <p class="mx-auto mt-6 max-w-lg text-center text-xl text-500 sm:max-w-3xl">{{ ribbon?.description }}</p>
                <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <template v-for="cta in ribbon?.ctas" key="cta.id">
                      <GlobalCta
                        :cta-element="cta"
                        :stretch="false"
                        ctaClass="flex items-center justify-center rounded-md border border-transparent px-4 py-3 text-base font-medium shadow-sm sm:px-8 bg-primary-900 hover:bg-primary-500"
                        spanClass="text-gray-700"
                        />
                    </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

</template>

<script setup lang="ts">
  import { RibbonData, Ribbon } from '~/types/selectRibbon'
  import { Billboard } from '~/types/billboard'

  interface BillboardWithBackgroundImageProps {
    ribbon: RibbonData & Ribbon<Billboard> | null
  }

  withDefaults(defineProps<BillboardWithBackgroundImageProps>(), {
    ribbon: null
  });
</script>