<template>
	<!-- create response image set unless it's an svg in which case just display the one -->
	<img
		v-if="!isNull(imageElement) && imageElement.ext != '.svg'"
		loading="lazy"
		:alt="useGet(imageElement, 'alternativeText', '')"
		:src="imageElement.url"
		:srcset="calSrcSet(imageElement.formats, mobileSrcSet, tabletSrcSet, desktopSrcSet)"
		:sizes="`${mobileSize}, ${tabletSize}, ${desktopSize}`"
		:width="width"
		:height="height"
		:class="imageClass"
		/>
	<img v-else-if="!isNull(imageElement)"
			loading="lazy"
			:alt="useGet(imageElement, 'alternativeText', '')"
			:src="imageElement.url"
			:width="width"
			:height="height"
			:class="imageClass"
	/>
</template>
<script setup lang="ts">
	import { Formats, Image } from '~/types/global/globalImage'

	interface ImageProps {
		imageElement: Image | null,
		width: number,
		height?: number,
		mobileSrcSet: string,
		tabletSrcSet: string,
		desktopSrcSet: string,
		mobileSize: string,
		tabletSize: string,
		desktopSize: string,
		imageClass?: string
	}

	withDefaults(defineProps<ImageProps>(), {
		imageElement: null,	
		imageClass: ''
	});

	function calSrcSet(formats: Formats, mobileSrcSet: string, tabletSrcSet: string, desktopSrcSet: string) {
			let srcSet = `${formats.thumbnail.url} ${mobileSrcSet},`;
			if(formats.small) {
					srcSet = srcSet + `${formats.small.url} ${tabletSrcSet},`
			}
			if(formats.medium){
					srcSet = srcSet + `${formats.medium.url} ${desktopSrcSet},`
			}
			return useTrimEnd(srcSet, ',');
	}
</script>