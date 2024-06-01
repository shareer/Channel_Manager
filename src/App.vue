<template>
  <main class="flex justify-center items-center h-screen">
    <div class="w-64 h-screen bg-white shadow-md">
      <ul class="mt-2">
        <li class="px-4 py-2 hover:bg-gray-200">
          <a href="#" class="flex items-center text-gray-700">
            <i class="fas fa-inbox w-5 h-5 mr-2"></i>
            Inbox
          </a>
        </li>
        <li class="px-4 py-2 hover:bg-gray-200">
          <a href="#" class="flex items-center text-gray-700">
            <i class="fas fa-user w-5 h-5 mr-2"></i>
            Personal
          </a>
        </li>
        <li class="px-4 py-2 hover:bg-gray-200">
          <a href="#" class="flex items-center text-gray-700">
            <i class="fas fa-chart-bar w-5 h-5 mr-2"></i>
            Reports
          </a>
        </li>
        <li class="px-4 py-2 hover:bg-gray-200">
          <a href="#" class="flex items-center text-gray-700">
            <i class="fas fa-users w-5 h-5 mr-2"></i>
            Teams
          </a>
        </li>
        <li class="px-4 py-2 hover:bg-gray-200" @click="openModal">
          <a href="#" class="flex items-center text-gray-700">
            <i class="fas fa-comments w-5 h-5 mr-2"></i>
            Channels
          </a>
        </li>
      </ul>
    </div>
    <!-- Main content -->
    <div class="flex-1 p-6">
      <ChannelManager v-if="showModal" @close="showModal = false" />
    </div>
  </main>
</template>

<script>
import ChannelManager from './components/pages/ChannelManager.vue';
import Button from './components/atoms/Buttons.vue'
export default {
  components: {
    ChannelManager,
    Button
  },
  data() {
    return {
      showModal: false
    };
  },
    methods: {
      openModal(){
        this.showModal = true;
        // set data to state
        // get data from state
      }
  }
};
</script>
