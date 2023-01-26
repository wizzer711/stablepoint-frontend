<template>
    <div class="relative bg-gray-50 dark:bg-gray-900 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{{ ribbon?.heading }}</h2>
          <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">{{ ribbon?.description }}</p>
        </div>
        <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <div v-for="post in posts" :key="post.title" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <!-- <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" /> -->
              <nuxt-img loading="lazy" class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
            </div>
            <div class="flex flex-1 flex-col justify-between bg-white dark:bg-gray-600 p-6">
              <div class="flex-1">
                <p class="text-sm font-medium text-primary-900">
                  <a :href="post.category.href" class="hover:underline">{{ post.category.name }}</a>
                </p>
                <a :href="post.href" class="mt-2 block">
                  <p class="text-xl font-semibold text-gray-900 dark:text-white">{{ post.title }}</p>
                  <p class="mt-3 text-base text-gray-500 dark:text-gray-400">{{ post.description }}</p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a :href="post.author.href">
                    <span class="sr-only">{{ post.author.name }}</span>
                    <!-- <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" /> -->
                    <nuxt-img loading="lazy" class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    <a :href="post.author.href" class="hover:underline">{{ post.author.name }}</a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500 dark:text-white">
                    <time :datetime="post.datetime">{{ post.date }}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{{ post.readingTime }} read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
  import { RibbonData, Ribbon } from '~/types/selectRibbon'
  import { BlogArticle } from '~/types/blogArticles'
  
  interface BlogArticlesProps {
      ribbon: RibbonData & Ribbon<Array<BlogArticle>> | null
  }

  withDefaults(defineProps<BlogArticlesProps>(), {
      ribbon: null
  });

  const posts = [
    {
      title: 'Tsohost retires Gridhost; free Stablepoint migration options',
      href: '#',
      category: { name: 'Website Hosting', href: '#' },
      description:
        'Tsohost is shutting down their Gridhost hosting platform on November 10th 2022. Stablepoint can migrate services to us for free.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://storage.googleapis.com/stablepoint-assets/uploads/blog/Stablepoint-is-giving-back-to-the-planet.svg?1630574068',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Useful Tips for SEO Link-building',
      href: '#',
      category: { name: 'Marketing', href: '#' },
      description:
        'Using various SEO strategies can improve your site’s visibility, rank in search engine results, and overall traffic generation.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://storage.googleapis.com/stablepoint-assets/uploads/imager/blog/230494/link-building-tips_bfb0e2050139de078c952cf1c346116b.webp',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Best keyword research tools',
      href: '#',
      category: { name: 'Marketing', href: '#' },
      description:
        'If you`re looking to attract quality traffic to your site, keyword research is a crucial element of modern SEO. By finding the right keywords, you can ensure that your content is seen by the right people.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://storage.googleapis.com/stablepoint-assets/uploads/imager/blog/229371/0-5-best-keyword-research-tools-hero-image_bfb0e2050139de078c952cf1c346116b.webp',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
</script>