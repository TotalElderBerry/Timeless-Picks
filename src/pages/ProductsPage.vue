<template>
    <div class="q-mt-md q-pa-md">
        <div class="row justify-center">
            <q-img :src="banner" style="max-width: 1000px;"/>
        </div>
        <div class="row justify-center q-mt-md">
            <div class="row justify-center q-gutter-xs">
                <ProductItem :inProducts="true" class="" @click="routeToProductPage" style="cursor: pointer"/>
                <ProductItem :inProducts="true" class="" @click="routeToProductPage" style="cursor: pointer"/>
                <ProductItem :inProducts="true" class="" @click="routeToProductPage" style="cursor: pointer"/>
                <ProductItem :inProducts="true" class="" @click="routeToProductPage" style="cursor: pointer"/>
                <ProductItem :inProducts="true" class="" @click="routeToProductPage" style="cursor: pointer"/>
                <ProductItem :inProducts="true" class="" @click="routeToProductPage" style="cursor: pointer"/>
                <ProductItem :inProducts="true" class="" @click="routeToProductPage" style="cursor: pointer"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import banner from 'assets/dress-banner.jpg'
    import {useRoute, useRouter} from 'vue-router'
    import ProductItem from 'src/components/ProductItem.vue';
    const route = useRoute()
    const router = useRouter()
    const param = route.params.category
    const routeToProductPage = () => {
        router.push({name: 'product', params: {id: 1}})
    }

</script>