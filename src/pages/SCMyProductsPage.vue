<template>
<q-page>
  
  <div class="bg-white q-pa-md q-ma-md">
    <div>
      <div class="text-h5 text-weight-bold q-mb-md">
        Product Search
      </div>
      <div class="row q-gutter-xs">
        <div class="row q-gutter-xs items-center col-xs-12 col-sm-5">
          <q-select dense v-model="model" :options="options" label="Filter" />
          <q-input outlined dense v-model="text" label="Search" class="col" />
        </div>
        <div class="row q-gutter-xs items-center q-mt-xs col-xs-12 col-sm-5">
          <div class="text-weight-bold ">Stock</div>
          <q-input outlined dense v-model="text" label="Search" class="col"/>
        </div>
        <div class="row q-gutter-xs items-center q-mt-xs col-xs-12 col-sm-5">
          <div class="text-weight-bold">Category</div>
          <q-input outlined dense v-model="text" label="Category" class="col"/>
        </div>
        <div class="row q-gutter-xs items-center q-mt-xs col-xs-12 col-sm-5">
          <div class="text-weight-bold">Sales</div>
          <q-input outlined dense v-model="text" label="Sales" class="col"/>
        </div>
      </div>
      <div class="q-gutter-md q-my-sm row justify-end">
        <q-btn outlined color="primary">Search</q-btn>
        <q-btn outlined >Reset</q-btn>
      </div>

    </div>
    <q-separator class="q-my-lg" />
    <div>
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
const options = ["Name", 'ID']

</script>

<style scoped>
</style>