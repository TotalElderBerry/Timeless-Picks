<template>
    <div @click="handleClick" style="cursor: pointer;" class="justify-around">
      <div class="q-mb-sm row justify-center items-center">
        <div class="text-weight-bold text-center" :class="{ 'text-subtitle2': $q.screen.lt.md, 'text-h6': $q.screen.gt.sm }">{{props.category.name}}</div>
      </div>
      <div class="text-center">
      	<q-img :src="props.category.image"  class="custom-border-radius bg-green-2" :class="{ 'img-size-xs': $q.screen.lt.md , 'img-size-md': $q.screen.gt.sm }" />
      </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const props = defineProps(['category'])
const router = useRouter()
const handleClick = () => {
  router.push({name: 'category', params: {type: props.category.route}})
}
</script>

<style>
.custom-border-radius{
  border-radius:30px;
}

.img-size-xs{
  width: 120px;
  height: 120px
}

.img-size-md{
  width: 200px;
  height: 200px
}


</style>
