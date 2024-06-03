<template>
  <div class="w-64 h-screen bg-white shadow-md">
    <ul class="mt-2">
      <li class="px-4 py-2 hover:bg-gray-200" v-for="item in menuItems" :key="item.name" @click="handleClick(item)">
        <a href="#" class="flex items-center text-gray-700">
          <i :class="item.iconClass + ' w-5 h-5 mr-2'"></i>
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    onChannelClick: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      menuItems: [
        { name: 'Inbox', iconClass: 'fas fa-inbox' },
        { name: 'Personal', iconClass: 'fas fa-user' },
        { name: 'Reports', iconClass: 'fas fa-chart-bar' },
        { name: 'Teams', iconClass: 'fas fa-users' },
        { name: 'Channels', iconClass: 'fas fa-comments', isChannel: true }
      ]
    };
  },
  methods: {
    handleClick(item) {
      if (item.isChannel) {
        this.onChannelClick();
      }
    }
  }
};
</script>
