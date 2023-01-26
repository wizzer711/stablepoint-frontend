<template>
  <div>
    <!-- <ClientOnly> -->
      <!-- <upm-dac
        order-config-url="https://clients.verpex.com/order/product"
        currency-code="USD"
      /> -->
      <!-- <upm-widget is="Hero" locale="en" img-path="https://upmind-site-static-assets.s3.eu-west-1.amazonaws.com/we_will_migrate_your_website_1_9156b65dce.svg"></upm-widget> -->
      <div class="plans-min-height">
      <upm-widget
      is="PlanCards"
      locale="fr"
      ></upm-widget>
      </div>
    <!-- </ClientOnly> -->
  </div>
</template>
<script setup lang="ts">

  useHead({
    script: [
      {
        hid: 'dac',
        type: 'module',
        // src: 'https://widgets.upmind.app/dac/upm-dac.min.js'
        src: 'https://upm-widgets.web.app/upm-widget.js'
      },
    ],
    link: [
      {
        rel: "preconnect",
        href: 'https://upm-widgets.web.app'
      },
      {
        rel: "dns-prefetch",
        href: 'https://upm-widgets.web.app'
      }
    ]
  })

</script>

<style scoped>

.plans-min-height {
  min-height: 50rem;
}

</style>