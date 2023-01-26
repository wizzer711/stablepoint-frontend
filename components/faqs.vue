<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Frequently asked questions</h2>
          <p class="mt-4 text-lg text-gray-500">Can’t find the answer you’re looking for? Reach out to our <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">customer support</a> team.</p>
        </div>
        <div class="mt-12 lg:col-span-2 lg:mt-0">
          <dl>
            <div v-for="faq in ribbon?.faqs" :key="faq.id">
              <GlobalFaq
                :faq="faq"
              />
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { RibbonData, Ribbon } from '~/types/selectRibbon'
    import { Faq } from '~/types/faqs'
    
    interface FaqProps {
      ribbon: RibbonData & Ribbon<Array<Faq>> | null
    }

    withDefaults(defineProps<FaqProps>(), {
        ribbon: null
    });
</script>