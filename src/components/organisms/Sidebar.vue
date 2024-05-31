<template>
  <div class="w-64 h-screen bg-white shadow-md">
    <SidebarList :items="items" @toggle-modal="$emit('toggle-modal')" />
  </div>
</template>

<script>
import SidebarList from '../molecules/SidebarList.vue';

export default {
  components: {
    SidebarList
  },
  data() {
    console.log('sidebar');

    return {
      items: [
        { iconClass: 'fas fa-inbox', label: 'Inbox', action: () => {} },
        { iconClass: 'fas fa-user', label: 'Personal', action: () => {} },
        { iconClass: 'fas fa-chart-bar', label: 'Reports', action: () => {} },
        { iconClass: 'fas fa-users', label: 'Teams', action: () => {} },
        { iconClass: 'fas fa-comments', label: 'Channels', action: () => { this.$emit('toggle-modal'); } }
      ]
    };
  }
};
</script>
