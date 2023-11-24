<template>
  <div class="input-wrapper">
    <input
      type="text"
      placeholder="Search..."
      class="rounded-search-input"
       :class="{ 'w-md-and-up': $q.screen.gt.md, 'w-lg-and-up': $q.screen.gt.lg }"
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
  width: 400px; /* Adjust the width as needed */
  padding: 15px;
  padding-right: 30px; /* Adjust the right padding to make space for the icon */
  border: 0px solid #ccc;
  border-radius: 20px; /* Adjust the border-radius as needed for rounded corners */
  outline: none; /* Remove the default input focus outline */
  font-size: 15px;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 10px; /* Adjust the right position as needed */
  transform: translateY(-50%);
  color: #666; /* Adjust the icon color as needed */
}

.w-md-and-up {
  width: 500px; /* Adjust the width for medium screens and larger */
}

.w-lg-and-up {
  width: 600px; /* Adjust the width for large screens and larger */
}
</style>
