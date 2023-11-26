<template>
  <q-page :class="{ 'q-pa-sm': $q.screen.lt.md, 'q-pa-xl': $q.screen.gt.sm }">
    <div class="bg-banner q-pa-sm row flex-center" :class="{ 'height-sm': $q.screen.lt.md, 'height-md': $q.screen.gt.md }">
      <div class="items-center">
        <div class="text-center bg-primary text-white custom-border-radius text-weight-bold" :class="{ 'text-h6 q-pa-sm': $q.screen.lt.md, 'text-h4 q-pa-lg': $q.screen.gt.sm }">
          Your Surplus, Their Treasures
        </div>

        <div class="row justify-center q-mt-md q-gutter-sm">
          <CustomInputBar />
          <q-btn round text-color="black" icon="shopping_cart" color="white" :size="$q.screen.lt.md ? 'xs':'md'"/>
        </div>
      </div>
    </div>

    <div class="row q-my-lg q-gutter-md">
      <div class="gt-sm inline col-3 col-lg-2">
        <div class="q-gutter-md">
          <div class="row"><q-btn class="col" size="lg" color="primary">Categories</q-btn></div>
          <div class="row"><q-btn class="col" size="lg" color="white" text-color="black">Apparels</q-btn></div>
          <div class="row"><q-btn class="col" size="lg" color="white" text-color="black">Gadgets</q-btn></div>
          <div class="row"><q-btn class="col" size="lg" color="white" text-color="black">Books</q-btn></div>
        </div>
      </div>
      <div class="col">
        <div class="flex q-gutter-sm" :class="{'justify-center': $q.screen.lt.lg, 'justify-around': $q.screen.gt.md}">
          <div class="col-xs-5" v-for="category,index in categories">
            <CategoryItem :category="category" :key="index" />
          </div>
        </div>
      </div>

    </div>

  </q-page>
</template>

<script setup>
import CustomInputBar from "src/components/CustomInputBar.vue"
import CategoryItem from "src/components/CategoryItem.vue"
import { categories } from "src/constants/constants.js"


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

.height-sm {
  height: 150px; /* Adjust the height for large screens and larger */
}

</style>