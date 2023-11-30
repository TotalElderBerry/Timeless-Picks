<template>
<div class="row">
  <div class="col-12" style="display: flex; flex-direction: column; height: 100%;">
    <div class="q-pa-md" style="flex: 3; overflow-y: auto;">
      <div>
        <div v-for="(message, index) in messages" :key="index">
          <q-chat-message :text="[message.text]" :sent="message.sent" :bg-color="message.sent ? 'amber-4' : ''" />
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
import { ref } from 'vue';

const messages = ref([
  { text: 'hey, how are you?', sent: true },
  { text: 'doing fine, how are you?', sent: false },
  { text: 'Na putos na ako order?', sent: false },
  { text: 'Puhon bos', sent: true },
]);

const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    messages.value.push({ text: newMessage.value, sent: true });
    newMessage.value = '';
  }
};
</script>

<style scoped>
</style>
