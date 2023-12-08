<template>
  <div class="col justify-center" style="height: 100vh">
    <div>
      <div class="row bg-white q-ma-sm">
        <q-btn @click="handleClick" class="back-button" icon="arrow_back" flat round />
        <ChatProductDetails :detail="props.product"/>
      </div>
      <ChatArea :chat="productchats.texts" />
    </div>
    <div v-if="route.name === 'chat-customer'">
      <q-page-sticky position="bottom" :offset="[0, 75]" v-if="!makeOfferClicked">
        <q-btn @click="handleMakeOffer" padding="sm" fab label="Make Offer" color="accent" />
      </q-page-sticky>
      <q-page-sticky position="bottom" :offset="[0, 75]" v-if="makeOfferClicked">
        <q-btn @click="() => newMessageModel = 100" class="q-mx-sm" padding="sm" fab label="100" color="accent" />
        <q-btn @click="() => newMessageModel = 500" class="q-mx-sm" padding="sm" fab label="500" color="accent" />
        <q-btn @click="clickCancel" class="q-mx-sm" padding="sm" fab label="CANCEL" color="red" />
      </q-page-sticky>
    </div>
    <div class="fixed-input-container">
      <div class="row col-12 items-center" style="flex-shrink: 0;">
        <q-input v-model="newMessageModel" class="col-11 q-px-md" placeholder="Type your message..." dense />
        <q-btn @click="sendMessage" class="col" color="primary" icon="send" flat round />
      </div>
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
    import {useRoute,useRouter} from 'vue-router'
    import {watch,ref} from 'vue'
    import {useChatStore} from 'src/stores/chats.js'
    const chatsstore = useChatStore()
    const route = useRoute()
    const productchats = ref()
    const makeOfferClicked = ref(false)
    const newMessageModel = ref('')

    const handleMakeOffer = () => {
      makeOfferClicked.value = true
    }

    const clickCancel = () => {
      makeOfferClicked.value = false
      newMessageModel.value = ''
    }

    productchats.value = chatsstore.chats.filter(chat => chat.product_id == route.params.id)[0]
    if(!productchats.value){
      const tempProduct = {
            product_id: parseInt(route.params.id),
            texts: [
                
            ]
      }
      productchats.value = tempProduct
      chatsstore.chats.push(productchats.value)
    }
    const router = useRouter()
    const props = defineProps(['product']);
    const chat = ref('')
    const newMessage = ref('')

    const handleClick = () => {
      console.log(route.name)
      if(route.name === 'chat-customer'){
        router.replace({name: 'product', params: {id: parseInt(route.params.id)}})
      }else{
        router.replace({name: 'chats'})
      }
    }
    

    const sendMessage = () => {
        const newMessage = {
          product_id: parseInt(route.params.id),
          text: newMessageModel.value,
          sent: (route.name === 'chat-customer')?false:true,
        }

        if(makeOfferClicked.value){
          newMessage.makeOffer = true;
        }
        chatsstore.sendMessage(newMessage)
        newMessageModel.value = ''
        makeOfferClicked.value = false
    }
</script>
