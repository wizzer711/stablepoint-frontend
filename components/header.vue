<template>
  <Popover class="relative bg-gray-800 dark:bg-white">
    <div class="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div>
        <a href="#" class="flex">
          <span class="sr-only">Your Company</span>
          <img v-if="$colorMode.value != 'dark'" class="h-8 w-auto sm:h-10" width="40" height="40" src="/assets/stablepoint-logomark-white.svg" alt="" />
          <img v-else class="h-8 w-auto sm:h-10" width="40" height="40" src="/assets/stablepoint-logomark-dark.svg" alt="" />
        </a>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>
      <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
        <PopoverGroup as="nav" class="flex space-x-10">

          <template v-for="navItem in navigationData" :key="navItem.id">
            <Popover v-if="!isEmpty(navItem.dropdown)" class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-white dark:text-gray-900' : 'text-white dark:text-gray-500', 'group inline-flex items-center rounded-md dark:bg-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                <span>{{ navItem.title }}</span>
                <ChevronDownIcon :class="[open ? 'text-white dark:text-gray-600' : 'text-white dark:text-gray-400', 'ml-2 h-5 w-5']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:max-w-3xl">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                      <template v-for="item in navItem.dropdown.collection" :key="item.id">
                        <a v-if="!item.extra_info" :href="item.path" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                          <div v-if="getIcon(item.icon)" class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                            <component :is="getIcon(item.icon)" class="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">{{ item.title }}</p>
                            <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                          </div>
                        </a>
                      </template>
                    </div>
                    <template v-for="item in navItem.dropdown.collection" :key="item.id">
                      <div v-if="item.extra_info" class="bg-gray-50 p-5 sm:p-8">
                        <a href="{{ item.slug }}" class="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
                          <div class="flex items-center">
                            <div class="text-base font-medium text-gray-900">{{ item.title }}</div>
                            <span class="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800">{{ item.tag }}</span>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                        </a>
                      </div>
                  </template>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <template v-else>

              <a v-if="navItem.external_link" :href="navItem.external_link" class="text-base font-medium text-white dark:text-gray-500">{{ navItem.title }}</a>
              <a v-else-if="navItem.internal_link" :href="navItem.internal_link.slug === 'homepage' ? '/' : navItem.internal_link.slug" class="text-base font-medium text-white dark:text-gray-500">{{ navItem.title }}</a>

            </template>

          </template>

          
        </PopoverGroup>
        <div class="flex items-center md:ml-12">
          <button @click="$colorMode.value = ($colorMode.value == 'light') ? 'dark' : 'light'" class="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="($colorMode.value == 'light') ? 'white' : 'gray'" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
          <a href="#" class="text-base font-medium text-white dark:text-gray-500 hover:text-gray-900">Sign in</a>
          <a href="#" class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-6">
                <template v-for="navItem in navigationData" :key="navItem.id">
                  <template v-for="item in navItem.items" :key="item.id">
                  <a v-if="!item.extra_info" :href="item.path" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                    <div v-if="getIcon(item.icon)" class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <component :is="getIcon(item.icon)" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">{{ item.title }}</div>
                  </a>
                </template>
              </template>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <a v-for="navItem in navigationData" :key="navItem.id" :href="navItem.path" class="text-base font-medium text-gray-900 hover:text-gray-700">{{ navItem.title }}</a>
            </div>
            <div class="mt-6">
              <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  ChartBarIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { PrimaryNavigation } from '~/types/global/globalNavigation'
    
  interface HeaderProps {
    navigationData: PrimaryNavigation | null
  }

  withDefaults(defineProps<HeaderProps>(), {
    navigationData: null
  });

  function getIcon(iconName: string) {
    const icons = { chart: ChartBarIcon, shield: ShieldCheckIcon }
      if(useHas(icons, iconName)){
        return icons[iconName]
      }else{
        return
      }
  }

</script>