<template>
  <main class="flex justify-center items-center h-screen">
    <Sidebar :onChannelClick="openModal" />
    <div class="flex-1 p-6">
      <ChannelManager v-if="showModal" @close="showModal = false" />
    </div>
  </main>
</template>

<script>
import ChannelManager from "./components/pages/ChannelManager.vue";
import Sidebar from "./components/organisms/Sidebar.vue";

export default {
  components: {
    ChannelManager,
    Sidebar,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
  },
};
</script>
