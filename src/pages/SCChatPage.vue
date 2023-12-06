<template>
    <div class="">
        <div class="q-pa-md text-h5 text-weight-bold">
            Messages
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4">
                <ChatTile v-for="detail,key in productchats" :detail="detail" @click="() => handleClick($q.screen.lt.sm,{key,...detail})" :preview="getPreviewMsg(detail.id)"/>
            </div>
            <div class="col">
                <div class="gt-xs inline col bg-white q-ma-md">
                    <ChatProductDetails :detail="selectedItem"/>
                </div>
                <div class="gt-xs inline">
                    <ChatArea v-if="!isLoading" :chat="selectedItemChat" @sendMessage="sendMessage"/>
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
import {ref, onMounted, computed} from 'vue'
import {useRoute,useRouter} from 'vue-router'

import {useChatStore} from 'src/stores/chats.js'
const chatsstore = useChatStore()
import {useProductStore} from 'src/stores/products.js'
const productsstore = useProductStore()

const isChatOpen = ref(false)
const selectedItem = ref(chatTile[0])
const selectedItemChat = ref([])
const router = useRouter()
const route = useRoute()
const productchats = ref([]);
const isLoading = ref(true);

onMounted(() => {
    productchats.value = productsstore.products.filter(product => {
        const hasChat = chatsstore.chats.some(chat => {
            return product.id === chat.product_id;
        });
        return hasChat;
    })

    selectedItem.value = productchats.value[0]
    selectedItemChat.value = chatsstore.chats.filter(chat => chat.product_id == selectedItem.value.id)[0].texts
    isLoading.value = false
})

const getPreviewMsg=(id)=>{
    const temp = chatsstore.chats.filter(chat => chat.product_id == id)[0].texts
    return (temp)?temp[temp.length-1].text:'Start Chatting'
}


const handleClick = (isXs,detail) => {
    isLoading.value = true
    if(isXs){
        router.push({name: 'chat-mobile', params: {id: detail.id}})
    }
    selectedItem.value = detail
    selectedItemChat.value = chatsstore.chats.filter(chat => chat.product_id == selectedItem.value.id)[0].texts
    isLoading.value = false
}

const sendMessage = (msg) => {
    const newMessage = {
        product_id: selectedItem.value.id,
        text: msg,
        sent: true,
    }
    chatsstore.sendMessage(newMessage)
    newMessage.value = ''
}

</script>


<style scoped>
</style>