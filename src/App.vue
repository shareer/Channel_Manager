<template>
  <main class="flex justify-center items-center h-screen">
    <button @click="showModal = true" class="bg-blue-500 text-white px-4 py-2 rounded">
      Open Modal
    </button>
    <ChannelManager v-if="showModal" @close="showModal = false" />
  </main>
</template>

<script>
import ChannelManager from './components/ChannelManager.vue';

export default {
  components: {
    ChannelManager
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>
