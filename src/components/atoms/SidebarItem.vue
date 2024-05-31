<template>
  <li class="px-4 py-2 hover:bg-gray-200" @click="$emit('click')">
    <a href="#" class="flex items-center text-gray-700">
      <Icon :icon-class="iconClass" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import Icon from './Icons.vue';

export default {
  components: {
    Icon
  },
  props: {
    iconClass: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>
