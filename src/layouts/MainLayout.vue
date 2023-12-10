<template>
<div>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated reveal class="bg-transparent">
      <q-toolbar>
        <q-btn
          @click="toggleLeftDrawer"
          color="primary"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          v-if="$q.screen.lt.md"
        />
        <img
          alt="Timeless Picks logo"
          src="~assets/tp-logo.png"
          style="width: 50px; height: 50px;"
        >

        <q-toolbar-title class="text-primary text-weight-bold" v-if="$q.screen.lt.md" :class="{ 'text-subtitle1': $q.screen.lt.md, 'height-md': $q.screen.gt.md }">
          Timeless Picks
        </q-toolbar-title>

        <div v-else v-for="link in linksList" class="q-mx-lg">
          <router-link :to="link.link" class="clickable-link text-primary text-weight-bold">
            {{ link.title }}
          </router-link>
        </div>
          <q-toolbar-title v-if="$q.screen.gt.sm">
          </q-toolbar-title>
        <q-btn flat round dense icon="notifications" color="primary" />
        <q-btn flat round dense icon="account_circle" color="primary" @click="routeToProfile"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
       <q-page-sticky class="" position="bottom-right" :offset="[18, 0]" v-if="route.name !== 'chat-customer' && route.name !== 'sc-login'">
        <div class="bg-white" v-if="toShowChats" style="max-height:200px; overflow-y:scroll">
          <div class="row items-center text-white q-pa-sm bg-primary">
            <div class="q-pl-sm col-11 text-weight-bold">Chats</div>
            <q-icon name="close" @click="() => toShowChats = false " class="col"/>
          </div>
          <div class="q-px-sm">
          <ChatTile v-for="detail,key in productchats" :detail="detail" @click="() => handleClick($q.screen.lt.sm,{key,...detail})" :preview="getPreviewMsg(detail.id)"/>
          </div>
        </div>
          <q-btn color="accent" v-if="!toShowChats" @click="() => toShowChats = true" label="CHAT" class="" size="lg"/>
        </q-page-sticky>
    </q-page-container>
  </q-layout>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import {useRoute, useRouter} from 'vue-router'
import {useChatStore} from 'src/stores/chats.js'
const chatsstore = useChatStore()
import {useProductStore} from 'src/stores/products.js'
const productsstore = useProductStore()
const leftDrawerOpen = ref(false)
const productchats = ref([]);
import ChatTile from "src/components/ChatTile.vue"
const toShowChats = ref(false)
const router = useRouter()
const route = useRoute()

onMounted(() => {
    productchats.value = productsstore.products.filter(product => {
        const hasChat = chatsstore.chats.some(chat => {
            return product.id === chat.product_id;
        });
        return hasChat;
    })
    console.log(productchats.value)
})

const getPreviewMsg=(id)=>{
    const temp = chatsstore.chats.filter(chat => chat.product_id == id)[0].texts
    return (temp)?temp[temp.length-1].text:'Start Chatting'
}


const handleClick = (isXs,detail) => {
    router.push({name: 'chat-customer', params: {id: detail.id}})
}

const routeToProfile = () => {
    console.log(router)
  router.push({name: 'profile'})
}

const linksList = [
  {
    title: 'HOME',
    icon: 'home',
    link: '/'
  },
  {
    title: 'SELLER CENTRE',
    icon: 'shop',
    link: '/sellercenter'
  },
  {
    title: 'PRIVACY',
    icon: 'chat',
    link: ''
  },
  {
    title: 'TERMS',
    icon: 'record_voice_over',
    link: ''
  },
  {
    title: 'ABOUT',
    icon: 'info',
    link: ''
  },
  {
    title: 'HELP',
    icon: 'help',
    link: ''
  },
  {
    title: 'ENGLISH',
    icon: 'public',
    link: ''
  },
]

const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value

</script>

<style scoped>

.clickable-link {
  cursor: pointer;
  text-decoration: none; /* Remove underline */
}
</style>