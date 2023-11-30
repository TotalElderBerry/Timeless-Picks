<template>
  <div class="flex items-center q-pa-sm ">
    <img :src="props.detail.img" alt="User Profile" class="profile-picture bg-white" />
    <div class="message-content">
      <div class="user-info">
        <div class="user-name ">{{props.detail.name}} - <span class="text-grey-9 text-bold">{{props.detail.product}}</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
const props = defineProps(['detail'])
</script>

<style scoped>
.message-tile {
  border-bottom: 1px solid #ccc;
}

.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.message-content {
  flex-grow: 1;
}

.user-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.timestamp {
  color: #888;
  font-size: 0.8em;
}

.preview {
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
