<template>
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="icon">
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
        height="1000px"
        class="transparent"
      >
        <q-carousel-slide name="phonead" class="column no-wrap flex-center">
            <q-card style="width: 300px" class="transparent text-center" flat>
                <q-card-section class="row items-center q-pb-none">
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup color="white"/>
                </q-card-section>
        
                <q-card-section>
                <q-img src="~/src/assets/phone_promo.png" />
                </q-card-section>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-card style="width: 300px" class="transparent text-center" flat>
                <q-card-section class="row items-center q-pb-none">
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup color="white"/>
                </q-card-section>
        
                <q-card-section>
                <q-img src="~/src/assets/laptop_promo1.png" />
                </q-card-section>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-card style="width: 300px" class="transparent text-center" flat>
                <q-card-section class="row items-center q-pb-none">
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup color="white"/>
                </q-card-section>
        
                <q-card-section>
                <q-img src="~/src/assets/laptop_promo2.png" />
                </q-card-section>
            </q-card>
        </q-carousel-slide>
       
      </q-carousel> 
    </q-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const icon = ref(true)
const slide = ref("phonead")
</script>