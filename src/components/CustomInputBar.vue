<template>
  <div class="input-wrapper">
    <input
      type="text"
      placeholder="Search..."
      class="rounded-search-input"
      :class="{ 'w-sm-and-down': $q.screen.lt.md, 'w-md-and-up': $q.screen.gt.sm }"
    />
    <q-icon name="search" class="search-icon" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.input-wrapper {
  position: relative;
}

.rounded-search-input {
  padding-right: 30px; /* Adjust the right padding to make space for the icon */
  border: 0px solid #ccc;
  border-radius: 20px; /* Adjust the border-radius as needed for rounded corners */
  outline: none; /* Remove the default input focus outline */
}

.search-icon {
  position: absolute;
  top:50%;
  right: 10px; /* Adjust the right position as needed */
  transform: translateY(-50%);
  color: #666; /* Adjust the icon color as needed */
}

.w-sm-and-down {
  padding: 8px;
  font-size: 10px;
  width: 200px; /* Adjust the width for medium screens and larger */
}

.w-md-and-up {
  padding: 10px;
  font-size: 15px;
  width: 400px; /* Adjust the width for large screens and larger */
}
</style>
