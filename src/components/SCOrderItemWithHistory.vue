<template>
    <div class="q-py-xs row items-center q-gutter-md " style="width: 100vw;">
        <q-card class="my-card" flat bordered style="width: 100%">
            <q-card-section horizontal>
            
            <q-card-section class="col-xs-4 col-sm-3 col-md-2 flex flex-center">
                <q-img
                class="rounded-borders"
                :src="props.order.img[0]"
                style="max-width: 150px; max-height: 150px;"
                />
            </q-card-section>

            <q-card-section class="q-pt-xs col">
                <div class="text-h6 q-mt-sm q-mb-xs">{{props.order.name}}</div>
                <div class="text-caption text-grey">
                    Ordered by - Brian Keith Lisondra ( @brianzl1 )
                </div>
            </q-card-section>

        </q-card-section>
  
        <q-separator />

        <q-card-section class="inline row q-gutter-sm items-center">
            <q-icon name="o_delivery_dining" size="sm" color="green"/>
            <div class="text-caption text-green">
                {{historyMsg}}
            </div>
        </q-card-section>
  
      </q-card>
  
    </div>
  </template>

<script setup>
    import { ref, computed } from "vue";
    const options = ref(['CONFIRM', 'REJECT'])
    const props = defineProps(['order'])
    const historyMsg = computed(() => {
        switch(props.order.status ){
            case 'completed':
                return 'COMPLETED'
            case 'pending':
                return 'To be confirm by the seller'
            case 'to be delivered':
                return 'In Guangzhou Sorting Facility'
            case 'rejected':
                return 'REJECTED'
        }
        // return (props.order.status === 'completed')?'COMPLETED':'In Guangzhou Sorting Facility'
    })
    const model = ref('Action')
</script>