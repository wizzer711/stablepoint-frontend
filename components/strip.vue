<template>
    <div class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
            <div :class="{ 'text-left' : ribbon?.alignment == 'left', 'text-center': ribbon?.alignment == 'centre' }">
                <h2 class="text-lg font-semibold text-indigo-600">{{ ribbon?.pre_heading }}</h2>
                <p class="mt-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">{{ ribbon?.heading }}</p>
                <!-- <div v-html="$parseMarkdown(ribbon?.heading)" class="mt-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl" />
                <p class="content mt-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">{{ $parseMarkdown(ribbon?.heading) }}</p> -->
                <p
                    class="mt-5 max-w-xl text-xl text-gray-500"
                    :class="{ 'mx-auto': ribbon?.alignment == 'centre' }"
                >{{ ribbon?.description }}</p>
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

<style>
    .content p {
        @apply last:mb-0;
        @apply mt-4;
        color: blue;
    }
</style>