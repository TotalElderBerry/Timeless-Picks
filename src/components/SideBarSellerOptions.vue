<template>
    <q-expansion-item
        expand-separator
        :icon="props.option.icon"
        :label="props.option.name"
        >
        
      <q-item
        clickable
        tag="a"
        target="_self"
        :to="sub.route"
        v-for="sub in props.option.subOptions"
      >
        <q-item-section>
          <q-item-label>{{ sub.name}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
</template>

<script setup>
const props = defineProps(['option'])
</script>
