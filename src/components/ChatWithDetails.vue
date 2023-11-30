<template>
  <div class="col justify-center" style="height: 100vh">
    <div>
      <div class="row bg-white q-ma-sm">
        <q-btn @click="handleClick" class="back-button" icon="arrow_back" flat round />
        <ChatProductDetails :detail="props.product"/>
      </div>
      <ChatArea :chat="chat"/>
    </div>

    <div class="fixed-input-container">
      <!-- <div class="row col-12 items-center" style="flex-shrink: 0;">
        <q-input v-model="newMessage" class="col-11 q-px-md" placeholder="Type your message..." dense />
        <q-btn @click="sendMessage" class="col" color="primary" icon="send" flat round />
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.fixed-input-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff; /* You can adjust the background color as needed */
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1); /* Optional: Add a box shadow for better visibility */
}
</style>

<script setup>
    import ChatProductDetails from "src/components/ChatProductDetails.vue";
    import ChatArea from "src/components/ChatArea.vue";
    import {useRouter} from 'vue-router'
    import {watch,ref} from 'vue'
    const router = useRouter()
    const props = defineProps(['product']);
    const chat = ref('')
    const newMessage = ref('')
    const handleClick = () => {
        router.replace({name: 'chats'})
    }
    

    const sendMessage = () => {
        chat.value = newMessage.value
        newMessage.value = ''
    }
</script>
