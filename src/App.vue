<template>
<div class="bg-image">
  <router-view />
</div>
</template>

<script setup>
import { useMeta } from 'quasar'

useMeta( () => {
  return {
    title: 'Timeless Picks'
  }
})

</script>

<style scoped>
.bg-image {
    background-image: url(assets/bg-1.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
</style>
