<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Meet our team</h2>
          <p class="text-xl text-gray-500">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
        </div>
        <ul role="list" class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3">
          <li v-for="teamMember in ribbon?.teamMembers" :key="teamMember.id">
            <div class="space-y-6">
              <GlobalImage
                :image-element="teamMember.image"
                mobile-src-set="360w"
                tablet-src-set="580w"
                desktop-src-set="640w"
                mobile-size="(max-width: 768px) 360px"
                tablet-size="(max-width: 1024px) 580px"
                desktop-size="50vw"
                image-class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                :width="40"
                :height="40"
                />
              <div class="space-y-2">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <h3>{{ teamMember.name }}</h3>
                  <p class="text-indigo-600">{{ teamMember.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { RibbonData, Ribbon } from '~/types/selectRibbon'
    import { TeamMember } from '~/types/team'

    interface TeamProps {
      ribbon: RibbonData & Ribbon<Array<TeamMember>> | null
    }

    withDefaults(defineProps<TeamProps>(), {
      ribbon: null
    });
</script>