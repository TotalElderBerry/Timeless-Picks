<template>
    <div class="">
        <div v-if="!isChatOpen" class="q-pa-md text-h5 text-weight-bold">
            Messages
        </div>
        <div class="row" v-if="!isChatOpen">
            <div class="col-xs-12 col-sm-4 col-md-4">
                <ChatTile v-for="detail in chatTile" :detail="detail" @click="() => handleClick($q.screen.lt.sm,detail)"/>
            </div>
            <div class="col">
            <div class="col bg-white q-ma-md">
                <ChatProductDetails :detail="selectedItem"/>
            </div>
            <div class="row q-ma-md">
                <div class="col-sm justify-center col-md gt-xs inline row" style="height: 80vh; overflow: hidden">
                    <ChatArea class="col-12" />
                    <div class="row col-12 items-center" style="flex-shrink: 0;">
                        <q-input v-model="newMessage" class="col-11" placeholder="Type your message..." dense />
                        <q-btn @click="sendMessage" class="col" color="primary" icon="send" flat round />
                    </div>
                </div>
            </div>
            </div>

        </div>

        <div class="full-screen-container q-px-md" v-if="isChatOpen" >
            <div class="" >
                <div class="row bg-white q-ma-sm">
                <q-btn @click="closeChat" class="back-button" icon="arrow_back" flat round />
                    <ChatProductDetails :detail="selectedItem"/>
                </div>
                <div class="row q-mx-sm" style="height: 85vh; overflow: hidden">
                <ChatArea class="col" />
                <div class="row col-12 items-center" style="flex-shrink: 0;">
                    <q-input v-model="newMessage" class="col-11" placeholder="Type your message..." dense />
                    <q-btn @click="sendMessage" class="col" color="primary" icon="send" flat round />
                </div>
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

const isChatOpen = ref(false)
const selectedItem = ref(chatTile[0])
const handleClick = (isXs,detail) => {
    if(isXs){
        console.log(detail)
        isChatOpen.value = true
    }
    selectedItem.value = detail
}

const closeChat = () => {
  isChatOpen.value = false
  // Additional logic for closing chat if needed
}
</script>


<style scoped>
.full-screen-container {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999; /* Set a high z-index to ensure it's above other elements */
}
</style>