<template>
    <a :href="createTextLink()" :target="linkElement?.target" :class="linkClass">
        <span aria-hidden="true">{{ linkElement?.label }}</span>
    </a>
</template>
<script setup lang="ts">
    import { Link } from '~/types/global/globalLink'

    interface LinkProps {
        linkElement: Link,
        stretch: boolean,
        linkClass?: string
    }

    const linkProps = withDefaults(defineProps<LinkProps>(), {
        linkClass: ''
    });

    function createTextLink(): string {
        if(linkProps.linkElement.external_link != null){
            return linkProps.linkElement.external_link;
        }
        if(linkProps.linkElement.hash != null){
            return `${linkProps.linkElement.slug}#${linkProps.linkElement.hash}`
        }else if(linkProps.linkElement.internal_link != null){
            return linkProps.linkElement.internal_link.slug === 'homepage' ? '/' : linkProps.linkElement.internal_link.slug
        }
    }
</script>