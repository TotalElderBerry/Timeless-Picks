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
          <q-input outlined dense v-model="searchmodel" label="Search" class="col" />
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
    <div>
      <div class="row" :class="{ 'q-gutter-xs justify-center': $q.screen.lt.sm, 'q-gutter-md justify-start': $q.screen.gt.xs }">
        <ProductItem v-for="pr in search()" :product="pr" class="" style="cursor: pointer"/>
      </div>
    </div>
  </div>

</q-page>
</template>

<script setup>
import { ref } from 'vue'
import ProductItem from 'src/components/ProductItem.vue'
import {useProductStore} from 'src/stores/products.js'
const productsstore = useProductStore()
const model = ref("Name")
const searchmodel = ref("")
const isSearchClicked = ref(false)
const options = ["Name", 'ID']
const products = ref(productsstore.products)

const handleClick = () => isSearchClicked.value = true

const search = () => {
  return (productsstore.products.filter(p=>p.name.toLowerCase().includes(searchmodel.value.toLowerCase())))
}

</script>

<style scoped>
</style>