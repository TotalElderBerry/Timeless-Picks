<template>
<div class="row">
  <div class="col-12" style="display: flex; flex-direction: column; height: 100%;">
    <div class="q-pa-md" style="flex: 3; overflow-y: auto;">
      <div>
        <div v-for="(message, index) in messages" :key="index">
          <q-chat-message :text="[message.text]" :sent="(route.name === 'chat-customer')?!message.sent:message.sent" :bg-color="(route.name === 'chat-customer' || route.name === 'chat-mobile')?(!message.sent ? 'amber-4' : 'green-3'):(message.sent ? 'amber-4' : 'green-3')" />
        </div>
      </div>
    </div>
    <div class="col-12 row bg-white">
      <q-input v-model="newMessage" class="col-11 q-px-md" placeholder="Type your message..." dense />
      <q-btn @click="sendMessage" class="col" color="primary" icon="send" flat round />
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import {useRoute} from 'vue-router'
const props = defineProps(['chat'])
const emits = defineEmits(['sendMessage'])
const route = useRoute()
watch(() => props.chat, ()=> {
  messages.value = props.chat
})

const messages = ref();
if(props){
  messages.value = props.chat
}else{
  messages.value = [
    { text: 'hey, how are you?', sent: true },
  ]
}

const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    emits('sendMessage',newMessage.value)
    newMessage.value = '';
  }
};
</script>

<style scoped>
</style>
