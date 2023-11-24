<template>
  <div :class="{ 'q-ma-md': $q.screen.lt.md, 'q-ma-xl': $q.screen.gt.sm }">
    <div class="bg-banner q-pa-sm row flex-center" :class="{ 'height-lg': $q.screen.gt.md, 'height-md': $q.screen.lt.md }">
      <div class="items-center">
        <div class="text-center bg-primary text-white custom-border-radius text-weight-bold" :class="{ 'text-h4 q-pa-md': $q.screen.lt.lg, 'text-h2 q-pa-lg': $q.screen.gt.md }">
          Your Surplus, Their Treasures
        </div>

        <div class="row justify-center q-mt-md q-gutter-sm">
          <CustomInputBar />
          <q-btn round text-color="black" icon="shopping_cart" color="white"/>
        </div>
      </div>
    </div>

    <div class="row q-my-lg q-gutter-sm justify-center">
      <div class="col-sm-5">
        <CategoryItem />
      </div>
      <div class="col-sm-5">
        <CategoryItem />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import CustomInputBar from "src/components/CustomInputBar.vue"
import CategoryItem from "src/components/CategoryItem.vue"

</script>

<style scoped>
.bg-banner {
    background-image: url(assets/banner-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
  }
.custom-border-radius{
  border-radius:30px;
}

.height-lg {
  height: 500px; /* Adjust the height for large screens and larger */
}

</style>