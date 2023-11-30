<template>
    <ChatWithDetails :product="p"/>
</template>

<script setup>
    import ChatWithDetails from 'src/components/ChatWithDetails.vue'
    import {chatTile} from "src/constants/constants.js"
    import {useRoute} from 'vue-router'
    import {ref} from 'vue'
    const route = useRoute()
    const p = ref(chatTile[route.params.id])
</script>