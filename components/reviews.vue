<template>
  <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="mx-auto max-w-xl">
            <p class="text-center mt-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-4xl">{{ ribbon?.heading }}</p>
            <p class="text-center mt-5 max-w-xl text-xl text-gray-500">{{ ribbon?.description }}</p>
        </div>

          <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-4">
              <div class="p-8 border rounded-lg dark:border-gray-700">
                  <p class="font-semibold text-gray-800 dark:text-white mb-2 text-lg">Excellent service and support</p>
                  <p class="leading-relaxed text-gray-500 dark:text-gray-400 text-base">
                      “An excellent and smooth transaction, took about 5 Minutes to receive my mini-reseller package, I had an issue with little to know documentation on setting up my Custom NameServers through my Registrar (NOT a fault of StablePoint), I came talk to the live support chat and Nana really knows her stuff and assisted me quickly and got the issue resolved in 5 minutes.”.
                  </p>

                  <div class="flex items-center mt-8 -mx-2">
                      <img loading="lazy" width="80" class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">

                      <div class="mx-2">
                          <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                          <span class="text-sm text-gray-500">CTO, Robert Consultency</span>
                      </div>
                  </div>
              </div>

              <div class="p-8 border rounded-lg dark:border-gray-700">
                  <p class="font-semibold text-gray-800 dark:text-white mb-2 text-lg">Never looked back!</p>
                  <p class="leading-relaxed text-gray-500 dark:text-gray-400 text-base">
                      “We moved to Stablepoint just over 2 years ago and never looked back. Their support is fast, reliable and competent. Their servers speedy and reliable. Thanks so much guys!”.
                  </p>

                  <div class="flex items-center mt-8 -mx-2">
                      <img loading="lazy" width="80" class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="">

                      <div class="mx-2">
                          <h1 class="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                          <span class="text-sm text-gray-500">CEO, Jeny Consultency</span>
                      </div>
                  </div>
              </div>

              <div class="p-8 border rounded-lg dark:border-gray-700">
                  <p class="font-semibold text-gray-800 dark:text-white mb-2 text-lg">Stablepoint Rocks!!!</p>
                  <p class="leading-relaxed text-gray-500 dark:text-gray-400 text-base">
                      “I don't know why the world doesn't use Stablepoint. They are the best hosts in the world. Really, The customer service is fantastic. They are always there when you need them. I couldn't figure out why the pages of my WP site were throwing up 404. Daniel diagnosed and fixed it in about 30 seconds. They are lifesavers if you are a blogger!”.
                  </p>

                  <div class="flex items-center mt-8 -mx-2">
                      <img loading="lazy" width="80" class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">

                      <div class="mx-2">
                          <h1 class="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                          <span class="text-sm text-gray-500">Marketing Manager at Stech</span>
                      </div>
                  </div>
              </div>

              <div class="p-8 border rounded-lg dark:border-gray-700">
                  <p class="font-semibold text-gray-800 dark:text-white mb-2 text-lg">10* Well Deserved</p>
                  <p class="leading-relaxed text-gray-500 dark:text-gray-400 text-base">
                      “Helpful every step of the way, no canned responses and genuinely a really nice bunch of people. Highly recommend. 10* Star Hosting Provider”.
                  </p>

                  <div class="flex items-center mt-8 -mx-2">
                      <img loading="lazy" width="80" class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">

                      <div class="mx-2">
                          <h1 class="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                          <span class="text-sm text-gray-500">Marketing Manager at Stech</span>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  </section>
</template>

<script setup lang="ts">
  import { RibbonData, Ribbon } from '~/types/selectRibbon'
  import { Review } from '~/types/reviews'

  interface ReviewsProps {
    ribbon: RibbonData & Ribbon<Array<Review>> | null
  }

  withDefaults(defineProps<ReviewsProps>(), {
    ribbon: null
  });
</script>