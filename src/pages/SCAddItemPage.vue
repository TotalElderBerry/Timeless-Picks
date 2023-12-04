<template>
	<q-form class="bg-white q-pa-md q-ma-md q-gutter-md">
    	<div class="text-weight-bold q-mx-xs text-h5">ADD PRODUCT</div>

    	<div class="q-mx-xs">
    		<div>
    			<div>Product Name</div>
          		<q-input outlined dense v-model="newItem.name" label="Input" class="col"  :rules="[val => !!val || 'Field is required']"/>
    		</div>

    		<div class="q-my-sm">
          		<q-select v-model="newItem.category" :options="categories" label="Category"  :rules="[val => !!val || 'Field is required']"/>
    		</div>

    		<div class="row q-gutter-xs">
	    		<div class="col-xs-4">
	    			<div>Stock</div>
	          		<q-input outlined dense v-model="newItem.stock" label="Input" class="col"  :rules="[val => (val !== null && val !== '') || 'Please enter a valid value',
						val => (val > 0 && val < 100) || 'Please enter a valid value'
				]"/>
	    		</div>
	    		<div class="col-xs-4">
	    			<div>Price</div>
	          		<q-input outlined dense v-model="newItem.price" label="Input" class="col"  :rules="[val => (val !== null && val !== '') || 'Please enter a valid value',
						val => (val > 0 && val < 9999999) || 'Please enter a valid value']"/>
	    		</div>
    		</div>
    	</div>

    	<div class="q-mx-xs">
    		<div>
    			<div>Media</div>
				<div class="q-gutter-sm">
					<q-radio v-model="imgoption" val="file" label="Image File" />
					<q-radio v-model="imgoption" val="link" label="Link" />
				</div>
    			<q-input v-if="imgoption === 'link'" outlined v-model="imgModel" label="Image Link" class="col q-my-xs" dense  :rules="[val => !!val || 'Field is required']"/>
    			<q-file v-if="imgoption === 'file'" outlined v-model="model" label="Pick File" dense>
		        <template v-slot:prepend>
		          <q-icon name="attach_file" />
		        </template>
		      </q-file>
    		</div>

    		<div>
    			<div>Description</div>
          		<q-input outlined dense v-model="text" label="Input" class="col" type="textarea"/>
    		</div>
    	</div>

    	<div class="q-gutter-md q-my-sm row justify-end">
        	<q-btn outlined color="primary" @click="submit">Add</q-btn>
      	</div>
  	</q-form>
</template>

<script setup>
import {ref} from 'vue'
import {useProductStore} from 'src/stores/products.js'
import {useRoute,useRouter} from 'vue-router'

const router = useRouter()
const route = useRoute()
const products = useProductStore()
const categorymodel = ref("Category")
const imgoption = ref("link")
const categories = ref(['Women', 'Men', 'Children'])
const imgModel = ref('')
const newItem = ref({
	name:'',
	category:'',
	stock:'',
	price:'',
})

const submit = () => {
	// newItem.img.push(imgModel)
	// const newOrder = {
	// 	id: products.products.length + 1,
	// 	img: [imgModel], 
	// 	...newItem,
	// };

	const newOrder = newItem.value
	newOrder.id = products.products.length + 1
	newOrder.img = [imgModel.value]
	console.log(newOrder)

	products.products.push(newOrder);
	console.log(products.products)
	router.push({name: 'my-products'})
}
</script>