<template>
    <a :href="createCtaLink()" :target="ctaElement.target" :class="ctaClass">
        <span :class="spanClass" aria-hidden="true">{{ ctaElement.label }}</span>
    </a>
</template>
<script setup lang="ts">
    import { Cta } from '~/types/global/globalCta'

    interface CtaProps {
        ctaElement: Cta,
        stretch: boolean,
        ctaClass?: string,
        spanClass?: string
    }

    const ctaProps = withDefaults(defineProps<CtaProps>(), {
        ctaClass: '',
        spanClass: ''
    });

    function createCtaLink(): string {
        if(ctaProps.ctaElement.external_link != null){
            return ctaProps.ctaElement.external_link;
        }
        if(ctaProps.ctaElement.hash != null){
            return `${ctaProps.ctaElement.url}#${ctaProps.ctaElement.hash}`
        }else if(ctaProps.ctaElement.internal_link != null){
            return ctaProps.ctaElement.internal_link.slug === 'homepage' ? '/' : ctaProps.ctaElement.internal_link.slug
        }
    }
</script>