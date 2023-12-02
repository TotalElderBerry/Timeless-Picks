<template>
    <div class="q-py-xs row items-center q-gutter-md " style="width: 100vw;">
        <q-card class="my-card" flat bordered style="width: 100%">
            <q-card-section horizontal>
            
            <q-card-section class="col-xs-4 col-sm-2 col-md-3 ">
                <q-img
                class="rounded-borders"
                src="https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/458115/item/phgoods_12_458115.jpg?width=494"
                style="max-width: 150px; max-height: 100%;"
                />
            </q-card-section>

            <q-card-section class="q-pt-xs col">
                <div class="text-h6 q-mt-sm q-mb-xs">Women's Dress</div>
                <div class="text-caption text-grey">
                    Ordered by - Brian Keith Lisondra ( @brianzl1 )
                </div>
            </q-card-section>

            <q-card-section class="gt-xs inline">
                <q-card-actions>
                    <q-select v-model="model" :options="options" label="Action" />
                </q-card-actions>
            </q-card-section>
  
        </q-card-section>
  
        <q-separator />

        <q-card-section class="lt-sm inline">
            <q-select v-model="model" :options="options" label="Action" />
        </q-card-section>
  
      </q-card>
  
    </div>
  </template>

<script setup>
    import { ref } from "vue";
    const options = ref(['CONFIRM', 'REJECT'])
    const model = ref('Action')
</script>