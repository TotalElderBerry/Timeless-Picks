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
        <q-btn flat round dense icon="account_circle" color="primary" />
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
    </q-page-container>
  </q-layout>
</div>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
const leftDrawerOpen = ref(false)

const linksList = [
  {
    title: 'HOME',
    icon: 'home',
    link: '/'
  },
  {
    title: 'SELLER CENTRE',
    icon: 'shop',
    link: 'sellercenter'
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