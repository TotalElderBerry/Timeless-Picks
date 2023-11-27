<template>
	<div class="bg-white q-pa-md q-ma-md q-gutter-md">
    	<div class="text-weight-bold q-mx-xs text-h5">ADD PRODUCT</div>

    	<div class="q-mx-xs">
    		<div>
    			<div>Product Name</div>
          		<q-input outlined dense v-model="text" label="Input" class="col" />
    		</div>

    		<div>
    			<div>Category</div>
          		<q-input outlined dense v-model="text" label="Input" class="col" />
    		</div>

    		<div class="row q-gutter-xs">
	    		<div class="col-xs-4">
	    			<div>Stock</div>
	          		<q-input outlined dense v-model="text" label="Input" class="col" />
	    		</div>
	    		<div class="col-xs-4">
	    			<div>Price</div>
	          		<q-input outlined dense v-model="text" label="Input" class="col" />
	    		</div>
    		</div>
    	</div>

    	<div class="q-mx-xs">
    		<div>
    			<div>Media</div>
    			<q-file outlined v-model="model" label="Pick File" dense>
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
        	<q-btn outlined color="primary">Add</q-btn>
      	</div>
  	</div>
</template>

<script setup>
</script>