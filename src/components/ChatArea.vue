<template>
<div class="row">
  <div class="col-12" style="display: flex; flex-direction: column; height: 100%;">
    <div class="q-pa-md" style="flex: 3; overflow-y: auto;">
      <div>
        <div v-for="(message, index) in messages" :key="index">
          <div v-if="message.makeOffer">
            <q-chat-message :text="['<strong>MADE AN OFFER</strong>',message.text]" text-html :sent="(route.name === 'chat-customer')?!message.sent:message.sent" :bg-color="(route.name === 'chat-customer' || route.name === 'chat-mobile')?(!message.sent ? 'amber-4' : 'green-3'):(message.sent ? 'amber-4' : 'green-3')" />
          </div>
          <div v-if="message.acceptOffer !== undefined">
            <q-chat-message :text="[(message.acceptOffer === true)?'<strong>ACCEPTED THE OFFER</strong>':'<strong>DECLINE THE OFFER</strong>',message.text]" text-html :sent="(route.name === 'chat-customer')?!message.sent:message.sent" :bg-color="(route.name === 'chat-customer' || route.name === 'chat-mobile')?(!message.sent ? 'amber-4' : 'green-3'):(message.sent ? 'amber-4' : 'green-3')" />
          </div>
          <div v-if="message.makeOffer && route.name !== 'chat-customer'" class="q-my-sm">
              <q-btn @click="() => handleOffer(message.text)" outline class="q-mx-sm" style="min-width: 70px;" padding="xs" fab label="ACCEPT" color="accent" />
              <q-btn @click="() => declineOffer(message.text)" outline class="q-mx-sm" style="min-width: 70px;" padding="xs" fab label="DECLINE" color="accent" />
          </div>
          <!-- <div v-if="message.acceptOffer && route.name !== 'chat-customer'" class="q-my-sm">
              <q-chat-message :text="['<strong>ACCEPTED THE OFFER</strong>',message.text]" text-html :sent="(route.name === 'chat-customer')?!message.sent:message.sent" :bg-color="(route.name === 'chat-customer' || route.name === 'chat-mobile')?(!message.sent ? 'amber-4' : 'green-3'):(message.sent ? 'amber-4' : 'green-3')" />
          </div> -->
          <q-chat-message v-if="!message.makeOffer && message.acceptOffer === undefined" :text="[message.text]" :sent="(route.name === 'chat-customer')?!message.sent:message.sent" :bg-color="(route.name === 'chat-customer' || route.name === 'chat-mobile')?(!message.sent ? 'amber-4' : 'green-3'):(message.sent ? 'amber-4' : 'green-3')" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import {useRoute} from 'vue-router'
const props = defineProps(['chat','item'])
const emits = defineEmits(['sendMessage'])
const route = useRoute()
import {useChatStore} from 'src/stores/chats.js'
const chatsstore = useChatStore()
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

// const sendMessage = () => {
//   if (newMessage.value.trim() !== '') {
//     emits('sendMessage',newMessage.value)
//     newMessage.value = '';
//   }
// };

const handleOffer = (val) => {
  const newMessage = {
    product_id: (props.item)?props.item.id:parseInt(route.params.id),
    text: val,
    sent: (route.name === 'chat-customer')?false:true,
  }
    newMessage.acceptOffer = true;
    chatsstore.sendMessage(newMessage)
}

const declineOffer = (val) => {
  const newMessage = {
    product_id: (props.item)?props.item.id:parseInt(route.params.id),
    text: val,
    sent: (route.name === 'chat-customer')?false:true,
  }
    newMessage.acceptOffer = false;
    chatsstore.sendMessage(newMessage)
}
</script>

<style scoped>
</style>
