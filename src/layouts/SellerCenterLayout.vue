<template>
  <q-layout view="hHh lpR fFf">
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
        />
        <img
          alt="Timeless Picks logo"
          src="~assets/tp-logo.png"
          style="width: 50px; height: 50px;"
        >

        <q-toolbar-title class="text-primary text-weight-bold" :class="{ 'text-subtitle1': $q.screen.lt.md, 'height-md': $q.screen.gt.md }">
          SELLER CENTER
        </q-toolbar-title>

          <q-toolbar-title v-if="$q.screen.gt.sm">
          </q-toolbar-title>
        <q-btn flat round dense icon="notifications" color="primary" />
        <q-btn flat round dense icon="account_circle" color="primary" />
      </q-toolbar>
    </q-header>


    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          class="text-center"
          header
        >
          <img src="~assets/tp-logo.png" style="width: 150px"/>
        </q-item-label>
        
        <EssentialLink v-bind="returnHome" :key="returnHome.title"/>

        <SideBarSellerOptions
          v-for="option,key in options"
          :key="key"
          :option="option"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
       <q-tabs align="center" class="bg-white q-ma-md" v-if="showTabs">
        <q-route-tab to="/page1" label="ALL" />
        <q-route-tab to="/page2" label="LIVE" />
        <q-route-tab to="/page3" label="SOLDOUT" />
        <q-route-tab to="/page3" label="SUSPENDED" />
        <q-route-tab to="/page3" label="UNLISTED" />
        <q-route-tab to="/page3" label="UNPUBLISHED" />
      </q-tabs>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'
import { ref, computed } from 'vue'
import SideBarSellerOptions from 'components/SideBarSellerOptions.vue'
import EssentialLink from 'components/EssentialLink.vue'
const leftDrawerOpen = ref(true)
const route = useRoute()

const showTabs = computed(() => route.name === 'my-products')

const returnHome = {
    title: 'Return to HOME',
    icon: 'home',
    link: '/'
}

const options = [
  {
    name: 'SHIPMENT',
    subOptions: [
      { name: 'My Shipment', route: '/my-shipment' },
      { name: 'Mass Ship', route: '/mass-ship' },
      { name: 'Shipping Setting', route: '/shipping-setting' }
    ],
    icon: 'local_shipping'
  },
  {
    name: 'ORDER',
    subOptions: [
      { name: 'My Orders', route: 'orders' },
      { name: 'Cancellation', route: '/cancellation' },
      { name: 'Return/Refund', route: '/return-refund' }
    ],
    icon: 'shopping_cart'
  },
  {
    name: 'PRODUCT',
    subOptions: [
      { name: 'My Products', route: 'my-products' },
      { name: 'Add New Product', route: 'add-product' },
      { name: 'Suspended Products', route: '/suspended-products' }
    ],
    icon: 'sell'
  },
  {
    name: 'MARKETING CENTRE',
    subOptions: [
      { name: 'Marketing Centre', route: '/marketing-centre' },
      { name: 'TP Ads', route: '/tp-ads' },
    ],
    icon: 'store'
  },
  {
    name: 'CHAT BROADCAST',
    subOptions: [
      { name: 'Chat', route: 'chats' },
    ],
    icon: 'chat'
  },
  {
    name: 'FINANCE',
    subOptions: [
      { name: 'My Income', route: '/my-income' },
      { name: 'My Balance', route: '/my-balance' },
      { name: 'Bank Accounts', route: '/bank-accounts' }
    ],
    icon: 'payments'
  },
  {
    name: 'DATA',
    subOptions: [
      { name: 'Business Insight', route: '/business-insight' },
      { name: 'Account Help', route: '/account-help' },
      { name: 'Preferred Seller', route: '/preferred-seller' }
    ],
    icon: 'insights'
  },
];



const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value

</script>
