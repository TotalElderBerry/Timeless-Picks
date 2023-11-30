<template>
    <div class="">
        <div class="q-pa-md text-h5 text-weight-bold">
            Messages
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4">
                <ChatTile v-for="detail,key in chatTile" :detail="detail" @click="() => handleClick($q.screen.lt.sm,{key,...detail})"/>
            </div>
            <div class="col">
                <div class="gt-xs inline col bg-white q-ma-md">
                    <ChatProductDetails :detail="selectedItem"/>
                </div>
                <div class="gt-xs inline">
                    <ChatArea />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ChatTile from "src/components/ChatTile.vue"
import ChatArea from "src/components/ChatArea.vue"
import ChatProductDetails from "src/components/ChatProductDetails.vue"
import {chatTile} from "src/constants/constants.js"
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const isChatOpen = ref(false)
const selectedItem = ref(chatTile[0])
const router = useRouter()
const handleClick = (isXs,detail) => {
    if(isXs){
        // isChatOpen.value = true
        router.push({name: 'chat-mobile', params: {id: detail.key}})
    }
    selectedItem.value = detail
}
</script>


<style scoped>
</style>