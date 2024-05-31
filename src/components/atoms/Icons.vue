<template>
  <i :class="`w-5 h-5 mr-2 ${iconClass}`"></i>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true
    }
  }
};
</script>
