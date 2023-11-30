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

        <div class="row justify-end" style="width: 100%">
          <CustomInputBar />
        </div>
        

          <q-toolbar-title>
          </q-toolbar-title>
        <q-btn flat round dense icon="notifications" color="primary" />
        <q-btn flat round dense icon="account_circle" color="primary" />
      </q-toolbar>
    </q-header>


    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="q-pa-md"
    >

    <div class="row justify-center">
        <img
          alt="Timeless Picks logo"
          src="~assets/tp-logo.png"
          style="width: 180px; height: 180px;"
        >
    </div>

    <div class="row items-center">
      <div class="text-h6 text-weight-bold">Filter</div>
    </div>
      <q-expansion-item
        v-for="filter in options"
        :label="filter.name"
      >
        <q-checkbox v-for="sub in filter.subOptions" :label="sub.label" v-model="sub.isSelected">

        </q-checkbox>
      </q-expansion-item>

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
import CustomInputBar from 'components/CustomInputBar.vue'
const leftDrawerOpen = ref(true)
const route = useRoute()

const showTabs = computed(() => route.name === 'my-products')

const returnHome = {
    title: 'Return to HOME',
    icon: 'home',
    link: '/'
}
const options = ref([
  {
    name: 'TYPE',
    subOptions: [
      { label: 'SHORT', isSelected: false },
      { label: 'LONG', isSelected: true }
    ],
  },
  {
    name: 'STYLE',
    subOptions: [
      { label: 'SHORT', isSelected: false },
      { label: 'LONG', isSelected: true },
      { label: 'NICE', isSelected: false }
    ],
  },
  {
    name: 'PATTERN TYPE',
    subOptions: [
      { label: 'SHORT', isSelected: false },
      { label: 'LONG', isSelected: true }
    ],
  },
  {
    name: 'COLOR',
    subOptions: [
      { label: 'SHORT', isSelected: false },
      { label: 'LONG', isSelected: true }
    ],
  },
  {
    name: 'SIZE',
    subOptions: [
      { label: 'SHORT', isSelected: false },
      { label: 'LONG', isSelected: true }
    ],
  },
  {
    name: 'NECKLINE',
    subOptions: [
      { label: 'SHORT', isSelected: false },
      { label: 'LONG', isSelected: true }
    ],
  },
  {
    name: 'MATERIAL',
    subOptions: [
      { label: 'SHORT', isSelected: false },
      { label: 'LONG', isSelected: true }
    ],
  },
]);




const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value

</script>
