<template>
  <span class="block border-t-2 border-gray-100 py-4">
    <dt @click="isOpen = !isOpen" class="cursor-pointer block text-lg font-medium leading-6 text-gray-900 dark:text-white">{{ faq?.heading }}</dt>
    <transition name="fade">
      <dd v-show="isOpen" class="mt-2 text-base text-gray-500">{{ faq?.description }}</dd>
    </transition>
  </span>
</template>

<script setup lang="ts">
    import { Faq } from '~/types/faqs'

    let isOpen = ref(false)
    
    interface FaqProps {
      faq: Faq | null
    }

    withDefaults(defineProps<FaqProps>(), {
        faq: null
    });
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
      transition: all .2s;
  }
  .fade-enter, .fade-leave-to {
      opacity: 0;
  }
  .fade-enter-active {
      transition-delay: .2s;
  }
</style>