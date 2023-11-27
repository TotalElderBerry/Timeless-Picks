<template>
    <div class="">
        <div class="q-pa-md text-h5 text-weight-bold">
            Messages
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4">
                <ChatTile v-for="detail in chatTile" :detail="detail"/>
            </div>

            <div class="col-sm col-md gt-xs inline row" style="height: 100vh; overflow: hidden">
                <ChatArea class="col" />
                <div class="row col-12 items-center" style="flex-shrink: 0;">
                    <q-input v-model="newMessage" class="col-11" placeholder="Type your message..." dense />
                    <q-btn @click="sendMessage" class="col" color="primary" icon="send" flat round />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ChatTile from "src/components/ChatTile.vue"
import ChatArea from "src/components/ChatArea.vue"
import {chatTile} from "src/constants/constants.js"

</script>