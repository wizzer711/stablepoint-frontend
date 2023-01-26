<template>
  <div>
    <div
      v-for="(ribbon, index) in ribbons"
      :key="`selectRibbon_${ribbon.id}${index}`"
    >
      <Billboard
        v-if="ribbon.__component == 'ribbons.billboard'"
        :ribbon="ribbon"
      />
      <BillboardWithBackgroundImage
        v-if="ribbon.__component == 'ribbons.billboard-with-background-image'"
        :ribbon="ribbon"
      />
      <Features
        v-if="ribbon.__component == 'ribbons.features'"
        :ribbon="ribbon"
      />
      <Text
        v-if="ribbon.__component == 'ribbons.text'"
        :ribbon="ribbon"
      />
      <TextWithBackgroundImage
        v-if="ribbon.__component == 'ribbons.text-with-background-image'"
        :ribbon="ribbon"
      />
      <Team
        v-if="ribbon.__component == 'ribbons.team'"
        :ribbon="ribbon"
      />
      <Juxtapose
        v-if="ribbon.__component == 'ribbons.juxtapose'"
        :ribbon="ribbon"
      />
      <Faqs
        v-if="ribbon.__component == 'ribbons.faqs'"
        :ribbon="ribbon"
      />
      <Reviews
        v-if="ribbon.__component == 'ribbons.reviews'"
        :ribbon="ribbon"
      />
      <Strip
        v-if="ribbon.__component == 'ribbons.strip'"
        :ribbon="ribbon"
      />
      <StripThin
        v-if="ribbon.__component == 'ribbons.strip-thin'"
        :ribbon="ribbon"
      />
      <StripDomainSearch
        v-if="ribbon.__component == 'ribbons.strip-with-domain-search'"
        :ribbon="ribbon"
      />
      <Map
        v-if="ribbon.__component == 'ribbons.map'"
        :ribbon="ribbon"
      />
      <BlogArticles
        v-if="ribbon.__component == 'ribbons.blog-articles'"
        :ribbon="ribbon"
      />
      <Dac
        v-if="ribbon.__component == 'ribbons.dac'"
        :ribbon="ribbon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Ribbon, RibbonData } from '~/types/selectRibbon'

  interface SelectRibbonsProps {
    ribbons: Array<RibbonData & Ribbon<any>> | null
  }

  withDefaults(defineProps<SelectRibbonsProps>(), {
    ribbons: null
  });

</script>
