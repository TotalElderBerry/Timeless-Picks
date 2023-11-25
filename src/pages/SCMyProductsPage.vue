<template>
<q-page>
  
  <div class="bg-white q-pa-md q-ma-md">
    <div>
      <div class="text-h5 text-weight-bold q-mb-md">
        Product Search
      </div>
      <div class="row q-gutter-xs">
        <div class="row q-gutter-xs items-center col-xs-12 col-sm-5">
          <q-select dense v-model="model" :options="options" label="Search By" class="col-xs-3"/>
          <q-input outlined dense v-model="text" label="Search" class="col" />
        </div>
        <div class="row q-gutter-xs items-center q-mt-xs col-xs-12 col-sm-5">
          <div class="text-weight-bold col-xs-3" :class="{ 'text-right': $q.screen.gt.sm}">Stock</div>
          <q-input outlined dense v-model="text" label="Search" class="col"/>
        </div>
        <div class="row q-gutter-xs items-center q-mt-xs col-xs-12 col-sm-5">
          <div class="text-weight-bold col-xs-3">Category</div>
          <q-input outlined dense v-model="text" label="Category" class="col"/>
        </div>
        <div class="row q-gutter-xs items-center q-mt-xs col-xs-12 col-sm-5">
          <div class="text-weight-bold col-xs-3" :class="{ 'text-right': $q.screen.gt.sm}">Sales</div>
          <q-input outlined dense v-model="text" label="Sales" class="col"/>
        </div>
      </div>
      <div class="q-gutter-md q-my-sm row justify-end">
        <q-btn outlined color="primary" @click="handleClick">Search</q-btn>
        <q-btn outlined >Reset</q-btn>
      </div>

    </div>
    <q-separator class="q-my-lg" />
    <div v-if="isSearchClicked">
      <div class="row" :class="{ 'q-gutter-xs justify-center': $q.screen.lt.sm, 'q-gutter-md justify-start': $q.screen.gt.xs }">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  </div>

</q-page>
</template>

<script setup>
import { ref } from 'vue'
import ProductItem from 'src/components/ProductItem.vue'
const model = ref("Name")
const isSearchClicked = ref(false)
const options = ["Name", 'ID']

const handleClick = () => isSearchClicked.value = true

</script>

<style scoped>
</style>