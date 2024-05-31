<template>
  <div v-if="show" class="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    show: Boolean
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
