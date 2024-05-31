<template>
  <div class="fixed inset-0 flex items-center justify-center" @click="handleBackgroundClick">
    <div class="bg-white p-4 pb-8 pt-8 rounded-lg shadow-lg max-w-md mx-auto relative min-w-[450px]" @click.stop>
      <h1 class="text-xl mb-2">Channels</h1>
      <div class="flex flex-col space-y-2 rounded-md">
        <div class="relative">
          <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input 
            type="text" 
            class="w-full pl-10 pr-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 text-md" 
            placeholder="Add Channel"
          />
        </div>
        <draggable 
          tag="ul" 
          v-model="channelData" 
          class="space-y-2 mb-4 px-4 py-4" 
          item-key="channelName" 
          handle=".drag-handle" 
          ghost-class="moving-item"
          @end="onDragEnd"
        >
          <template #item="{ element }">
            <li class="flex items-center justify-between py-2">
              <div class="flex items-center space-x-5">
                <i class="fa-solid fa-grip-vertical text-gray-300 cursor-pointer hover:text-black drag-handle"></i>
                <div class="bg-gray-300 py-0.5 px-2 rounded text-white">
                  <i :class="`${element.channelIcon} text-black`"></i>
                </div>
                <span class="text-gray-700">{{ element.channelName }}</span>
              </div>
              <button class="text-gray-500 cursor-pointer hover:text-black" @click="removeChannel(element.channelName)">Remove</button>
            </li>
          </template>
        </draggable>
        <div class="flex justify-end space-x-2 mt-4">
          <button class="px-3 py-0.5 text-black bg-white border border-black hover:bg-gray-100 rounded-full" @click="emit('close')">Cancel</button>
          <button class="px-3 py-0.5 bg-black text-white hover:bg-gray-800 rounded-full" @click="applyChanges">Apply</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import draggable from 'vuedraggable';
import { channelData as initialChannelData } from '../mock/mock';

export default {
  name: 'ChannelManager',
  components: {
    draggable
  },
  setup(props, { emit }) {
    const channelData = ref([...initialChannelData]);

    const handleBackgroundClick = () => {
      emit('close');
    };

    const onDragEnd = () => {
      // Handle drag end event if needed
    };

    const removeChannel = (channelName) => {
      channelData.value = channelData.value.filter(channel => channel.channelName !== channelName);
    };

    const applyChanges = () => {
      // Handle apply changes logic
      console.log('Changes applied:', channelData.value);
    };

    return {
      channelData,
      handleBackgroundClick,
      onDragEnd,
      removeChannel,
      applyChanges
    };
  }
};
</script>

<style scoped>
.moving-item {
  opacity: 0.5;
  background-color: #f0f0f0;
}
</style>
