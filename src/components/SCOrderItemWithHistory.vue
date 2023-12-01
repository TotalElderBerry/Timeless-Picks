<template>
    <div class="q-py-xs row items-center q-gutter-md " style="width: 100vw;">
        <q-card class="my-card" flat bordered style="width: 100%">
            <q-card-section horizontal>
            
            <q-card-section class="col-xs-4 col-sm-3 col-md-2 flex flex-center">
                <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
            </q-card-section>

            <q-card-section class="q-pt-xs col">
                <div class="text-h6 q-mt-sm q-mb-xs">Women's Dress</div>
                <div class="text-caption text-grey">
                    Ordered by - Brian Keith Lisondra ( @brianzl1 )
                </div>
            </q-card-section>

        </q-card-section>
  
        <q-separator />

        <q-card-section class="inline row q-gutter-sm items-center">
            <q-icon name="o_delivery_dining" size="sm" color="green"/>
            <div class="text-caption text-green">
                In guangzhou sorting facility
            </div>
        </q-card-section>
  
      </q-card>
  
    </div>
  </template>

<script setup>
    import { ref } from "vue";
    const options = ref(['CONFIRM', 'REJECT'])
    const model = ref('Action')
</script>