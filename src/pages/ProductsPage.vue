<template>
    <div class="q-mt-md q-pa-md">
        <div class="row justify-center">
            <q-img :src="banner" style="max-width: 1000px;"/>
        </div>
        <div class="row justify-center q-mt-md">
            <div class="row justify-center q-gutter-xs">
                <ProductItem :inProducts="true" class=""/>
                <ProductItem :inProducts="true" class=""/>
                <ProductItem :inProducts="true" class=""/>
                <ProductItem :inProducts="true" class=""/>
                <ProductItem :inProducts="true" class=""/>
                <ProductItem :inProducts="true" class=""/>
                <ProductItem :inProducts="true" class=""/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import banner from 'assets/dress-banner.jpg'
    import {useRoute} from 'vue-router'
    import ProductItem from 'src/components/ProductItem.vue';
    const route = useRoute()
    const param = route.params.category

</script>