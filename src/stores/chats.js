import { defineStore } from 'pinia';

export const useChatStore = defineStore('chats', {
  state: () => ({
    counter: 0,
    chats: [
        {
            product_id: 1,
            texts: [
                { text: 'hey, how are you?', sent: true },
                { text: 'doing fine, how are you?', sent: false },
                { text: 'Na putos na ako order?', sent: false },
                { text: 'Puhon bos', sent: true }
            ]
        }
    ],
  }),
  actions: {
    sendMessage(msg) {
        const { product_id, text, sent } = msg;

      // Find the chat with the given product_id
      const chat = this.chats.find((chat) => chat.product_id === product_id);

      // If the chat is found, push the new message to the texts array
      if (chat) {
        chat.texts.push({ text, sent });
      } else {
        // If the chat does not exist, create a new chat
        this.chats.push({
          product_id,
          texts: [{ text, sent }],
        });
      }

    },
  },
});
