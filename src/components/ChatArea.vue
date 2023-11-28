<template>
  <div class="q-pa-md q-ma-md row">
    <div style="width: 100%;" >
      <div v-for="(message, index) in messages" :key="index">
        <q-chat-message :text="[message.text]" :sent="message.sent" :bg-color="message.sent ? 'amber-4':''"/>
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
  if (newMessage.trim() !== '') {
    messages.value.push({ text: newMessage, sent: true });
    newMessage.value = '';
  }
};
</script>

<style scoped>
</style>
