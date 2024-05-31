<template>
  <ul class="mt-2">
    <SidebarItem 
      v-for="item in items" 
      :key="item.label" 
      :icon-class="item.iconClass" 
      :label="item.label" 
      @click="item.action" 
    />
  </ul>
</template>

<script>
import SidebarItem from '../atoms/SidebarItem.vue';

export default {
  components: {
    SidebarItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
