<template>
    <div class="q-mt-md q-pa-md">
        <div class="row justify-center">
            <q-img :src="banner" style="max-width: 1000px;"/>
        </div>
        <div class="row justify-center q-mt-md">
            <div class="row justify-center q-gutter-xs">
                <ProductItem v-for="pr in products.products" :product="pr" :inProducts="true" class="" @click="() => routeToProductPage(pr.id)" style="cursor: pointer"/>

            </div>
        </div>
    </div>
</template>

<script setup>
    import banner from 'assets/dress-banner.jpg'
    import {useRoute, useRouter} from 'vue-router'
    import ProductItem from 'src/components/ProductItem.vue';
    import {useProductStore} from 'src/stores/products.js'
    const products = useProductStore()
    const route = useRoute()
    const router = useRouter()

    const param = route.params.category
    const routeToProductPage = (id) => {
        router.push({name: 'product', params: {id: id}})
    }


</script>