<template>
    <ChatWithDetails :product="p"/>
</template>

<script setup>
    import ChatWithDetails from 'src/components/ChatWithDetails.vue'
    import {chatTile} from "src/constants/constants.js"
    import {useRoute, useRouter} from 'vue-router'
    import {ref} from 'vue'
    
    import {useProductStore} from 'src/stores/products.js'
    const productsstore = useProductStore()
    const p = ref()
    const isChatOpen = ref(false)
    const selectedItem = ref(chatTile[0])
    const router = useRouter()
    const route = useRoute()

    if(route.params.id){
        const product = productsstore.products.filter(product => product.id == route.params.id)
        p.value = product[0]
    }
</script>