<template>
    <div class="q-pa-md row" style="max-width:1000px; margin-left: auto; margin-right: auto">
     <q-card class="my-card row" flat bordered>
        <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            arrows
            height="350px"
            class="bg-green-4 text-white shadow-1 rounded-borders col-md-4 col-sm-12"
        >
        <q-carousel-slide v-for="img,key in currentProduct.img" :name="key" class="column no-wrap flex-center">
            <div style="width: 100%;">
                <img
                :src="img"
                style="width: 100%; height: auto; object-fit: contain; min-width: 210px; min-height: 150px;"
                />
            </div>
        </q-carousel-slide>
      </q-carousel>

      <q-card-section class="col-xs-12 col-md-7">
        <div class="text-h6 q-mb-xs">{{currentProduct.name}}</div>
        <div class="text-subtitle1 q-mb-xs text-green text-weight-bolder">${{currentProduct.price}}</div>

        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="primary" />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
        </div>
        <q-card flat bordered class="q-mt-xs q-px-sm">
            <div class="row justify-between items-center q-pa-xs q-gutter-sm">
                <div class="row items-center">
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar.png">
                    </q-avatar>

                    <div class="q-ml-sm">
                        <div>
                            Ayala 
                        </div>
                        <div class="text-caption text-grey">
                            Active 1 min ago 
                        </div>
                    </div>
                </div>

                <div>
                    <q-btn outline label="Visit Shop" color="green"/>
                </div>
            </div>
        </q-card>
        <q-card class="q-mt-sm" flat>
        <q-card-section>
            <div class=" q-mb-xs">Sizes</div>
            <div class="row no-wrap items-center q-gutter-md">
            <q-badge outline color="primary" label="Small" />
                <q-badge outline color="primary" label="Medium" />
                <q-badge outline color="primary" label="Latge" />
            </div>
        </q-card-section>
        </q-card>

        <q-card-section class="gt-sm inline row items-center q-gutter-sm">
            <div class="row q-gutter-xs">
            <q-btn label="Chat" class=" text-caption bg-secondary text-white" style="font-size: 10px"/>
            <q-btn outlined label="Add to Cart" icon="shopping_cart" class=" text-caption bg-secondary text-white" style="font-size: 10px"/>
            </div>
            <q-btn @click="routeToCheckout" label="Buy Now" class="col bg-primary text-white"/>
        </q-card-section>
      </q-card-section>
    </q-card>


    
    <div class="q-mt-md">
        <div class="text-h6">
            Other Products
        </div>
         <div class="row justify-center q-gutter-xs">
            <ProductItem v-for="pr in otherProducts.value" :product="pr" :inProducts="true" class="" @click="() => routeToProductPage(pr.id)" style="cursor: pointer"/>
        </div>
    </div>

    </div>
    <div class="absolute-bottom fixed-bottom bg-white row lt-md inline" style="position:sticky; width: 100%">
      <q-btn label="Chat" class="col-3 text-caption bg-secondary text-white"/>
      <q-btn label="Add to Cart" class="col-3 text-caption bg-secondary text-white" style="font-size: 10px"/>
      <q-btn @click="routeToCheckout" label="Buy Now" icon="update" class="col bg-primary text-white"/>
    </div>
</template>

<script setup>
import {ref,computed, watch, onMounted} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import ProductItem from 'src/components/ProductItem.vue';
import {useProductStore} from 'src/stores/products.js'
const products = useProductStore()
const router = useRouter()
const route = useRoute()
const slide = ref(0)
const currentProduct = ref()
const otherProducts = ref()
watch(() => route.params.id,() => {
    otherProducts.value = computed(() => products.products.filter(pr => pr.id != route.params.id))
    currentProduct.value = getProduct()
    console.log(otherProducts.value)
})

const getProduct = () => {
    if(route.params.id > -1 && route.params.id <= products.products.length){
        return products.products[route.params.id - 1]
    }
}
otherProducts.value = computed(() => products.products.filter(pr => pr.id != route.params.id))

currentProduct.value = getProduct()
// onMounted(() => {
//     console.log("hi")

//     otherProducts.value = computed(() => products.products.filter(pr => pr.id != route.params.id))
//     const getProduct = () => {
//         if(route.params.id > -1 && route.params.id <= products.products.length){
//             return products.products[route.params.id - 1]
//         }
//     }

//     currentProduct.value = getProduct()
// })

const routeToCheckout = () => {
    router.push({name: 'checkout', params: {id: route.params.id}})
}

const routeToProductPage = (id) => {
    router.push({name: 'product', params: {id: id}})
}
</script>