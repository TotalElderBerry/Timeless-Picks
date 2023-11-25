<template>
<div class="bg-image">
  <router-view />
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
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
