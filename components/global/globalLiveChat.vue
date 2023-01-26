<template>
    <a
        id="jivo-live-chat-toggle"
        class="jivo-live-chat"
        :class="{ 'enabled': liveChatEnabled }"
        href="javascript:void(0);"
        @click="triggerLiveChat()"
    ><img alt="Jivo Live Chat" width="75" height="75" src="/assets/live-chat.svg" /></a>
</template>
<script setup lang="ts">

    const route = useRoute()
    let liveChatEnabled = ref(false)

    function triggerLiveChat() {
        if(process.client){
            window.dataLayer.push({ 'event': 'toggleLiveChat', 'enabled': true })
            window.dataLayer.push({
                event: 'VirtualPageview',
                virtualPageURL: route.path,
                virtualPageTitle: route.name
            })
            console.log('dataLayer on liveChat trigger', window.dataLayer)
        }
        liveChatEnabled.value = true
    }
</script>

<style scoped>

a.jivo-live-chat {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 10;
}
a.jivo-live-chat.enabled {
    display: none;
}

</style>