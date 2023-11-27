<template>
    <q-tabs align="center" class="bg-white q-ma-md">
        <q-route-tab @click="() => handleClick(category.route)" v-for="category in categories" :label="category.name" :class="route.params.type === category.route?'text-green-9':'text-black'"/>
    </q-tabs>

    <div v-if="!products" class="flex flex-center">
        <div class="text-h6">
            No products Found
        </div>
    </div>

    <div class="q-px-lg" v-else>
        <div class="row q-py-md" v-for="product in products.products">
            <div class="col-xs-12 col-sm-4 flex flex-center text-weight-bold q-py-xs">{{product.name.toUpperCase()}}</div>
            <div class="row q-gutter-md col-sm-8">
            <div v-for="image in product.images">
                <q-img :src="image.img" class="custom-border-radius bg-white" :class="{ 'img-size-xs': $q.screen.lt.md , 'img-size-md': $q.screen.gt.sm }"/>
                <div class="text-center text-green-8 text-weight-bold" style="font-size: 12px">{{image.label}}</div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {watch,ref, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {categories, categoryProducts} from 'src/constants/constants.js'
const router = useRouter()
const route = useRoute()
const products = ref({})
const handleClick = (route) => {
  router.push({name: 'category', params: {type: route}})
}

watch(() => route.params, ()=>{
    products.value = categoryProducts.filter((category) => category.id === route.params.type)[0] 
    console.log(products.value)
})

onMounted(()=>{
    products.value = categoryProducts.filter((category) => category.id === route.params.type)[0] 
})
</script>

<style scoped>
.custom-border-radius{
  border-radius:100px;
}
.img-size-xs{
  width: 80px;
  height: 80px
}

.img-size-md{
  width: 120px;
  height: 120px
}

</style>