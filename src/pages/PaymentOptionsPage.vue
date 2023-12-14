<template>
    <div class="flex flex-center q-mt-xl">   
        <div style="max-width: 900px; width: 900px" class="bg-white">
            <q-expansion-item  expand-separator
                icon="o_local_shipping"
                label="Cash On Delivery">
                <template v-slot:header>
                <q-item-section>
                <div class="row items-center">
                    <q-icon name="o_local_shipping" size="md"></q-icon>
                    <div class="q-ml-lg">
                    Cash On Delivery
                    </div>
                </div>
                </q-item-section>
                <q-item-section side>
                    <q-radio v-model="payment" val="Cash On Delivery" />
                </q-item-section>
            </template>
            </q-expansion-item>
            <q-expansion-item
                expand-separator
                icon="money"
                label="E-Wallet"
                default-opened
            >
                <q-card-section>
                    <q-list>
                        <q-item clickable v-for="option in options">
                            <q-item-section avatar>
                            <q-img
                                :src="option.img"
                                />
                            </q-item-section>
                            <q-item-section>{{option.name}}</q-item-section>
                                <q-item-section side>
                                    <q-radio v-model="payment" :val="option.name" />
                                </q-item-section>
                        </q-item>
                        
                    </q-list>
                </q-card-section>
            </q-expansion-item>
            <div class="text-right q-pa-md">
                <q-btn class="col-12" color="primary" @click="handleConfirm">
                    Confirm
                </q-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {usePaymentOptionStore} from 'src/stores/paymentOption.js'
    import {useRouter} from 'vue-router'
    const paymentOption = usePaymentOptionStore()
    const options = ref([
        {name: 'Gcash', img: 'https://play-lh.googleusercontent.com/QNP0Aj2hyumAmYiWVAsJtY2LLTQnzHxdW7-DpwFUFNkPJjgRxi-BXg7A4yI6tgYKMeU'},
        {name: 'Paypal', img:'https://cdn-icons-png.flaticon.com/512/174/174861.png'},
        {name: 'Paymaya', img:'https://sa.kapamilya.com/absnews/abscbnnews/media/2019/business/07/08/paymaya-logo.jpg'},
    ])
    const payment = ref(paymentOption.option)
    const router = useRouter()
    const handleConfirm = async () => {
        paymentOption.option = payment.value
        router.go(-1)
    }
</script>