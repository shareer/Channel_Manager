<template>
  <div class="fixed inset-0 flex items-center justify-center" @click="handleBackgroundClick">
    <div class="bg-white p-4 pb-8 pt-8 rounded-lg shadow-lg max-w-md mx-auto relative min-w-[450px]" @click.stop>
      <h1 class="text-xl mb-2">Channels</h1>
      <div class="flex flex-col space-y-2 rounded-md">
        <SearchBar placeholder="Add Channel" @input="debouncedHandleInput" @enter="handleEnter" />
        <ChannelList 
          :channels="displayedChannels" 
          @update:channels="updateChannels" 
          @dragEnd="onDragEnd" 
          @remove="removeChannel"
        />
        <div v-if="changesMade" class="flex justify-end space-x-2 mt-4">
          <Button variant="secondary" @click="cancelChanges">Cancel</Button>
          <Button variant="primary" @click="applyChanges">Apply</Button>
        </div>
      </div>
    </div>
    <Toast :message="toasterMessage" :show="showToaster" />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import SearchBar from '../molecules/SearchBar.vue';
import ChannelList from '../organisms/ChannelList.vue';
import Button from '../atoms/Buttons.vue';
import Toast from '../atoms/Toast.vue';
import { debounce } from 'lodash';
import { channelData as initialChannelData } from '../../mock/mock';

const ICONS = [
  'fa-solid fa-tv',
  'fa-solid fa-radio',
  'fa-solid fa-music',
  'fa-solid fa-podcast',
  'fa-solid fa-film',
  'fa-solid fa-newspaper',
  'fa-solid fa-globe',
  'fa-solid fa-broadcast-tower',
  'fa-solid fa-camera',
  'fa-solid fa-headphones'
];

export default {
  name: 'ChannelManager',
  components: {
    SearchBar,
    ChannelList,
    Button,
    Toast
  },
  setup(props, { emit }) {
    const channelData = ref([...initialChannelData]);
    const displayedChannels = ref([...initialChannelData]);
    const searchQuery = ref('');
    const changesMade = ref(false);
    const toasterMessage = ref('');
    const showToaster = ref(false);

    const handleBackgroundClick = () => {
      emit('close');
    };

    const onDragEnd = () => {
      changesMade.value = true;
    };

    const removeChannel = (channelName) => {
      updateChannelData(channelData.value.filter(channel => channel.channelName !== channelName));
    };

    const applyChanges = () => {
      changesMade.value = false;
      toasterMessage.value = 'Channels updated successfully'; 
      showToaster.value = true; 
      setTimeout(() => {
        showToaster.value = false; 
      }, 2000);
      console.log('Changes applied:', channelData.value);
    };

    const cancelChanges = () => {
      displayedChannels.value = [...channelData.value];
      changesMade.value = false;
    };

    const handleInput = (input) => {
      searchQuery.value = input;
    };

    const debouncedHandleInput = debounce(handleInput, 300);

    const handleEnter = (input) => {
      const normalizedInput = input.toLowerCase();
      const match = channelData.value.some(channel => channel.channelName.toLowerCase().includes(normalizedInput));
      if (!match) {
        const randomIcon = ICONS[Math.floor(Math.random() * ICONS.length)];
        const newChannel = { channelName: input, channelIcon: randomIcon };
        updateChannelData([...channelData.value, newChannel]);
      } else {
        displayedChannels.value = channelData.value.filter(channel => 
          channel.channelName.toLowerCase().includes(normalizedInput)
        );
      }
      searchQuery.value = ''; // Clear search input after processing
    };

    const updateChannels = (updatedChannels) => {
      updateChannelData(updatedChannels);
    };

    const updateChannelData = (newData) => {
      channelData.value = newData;
      displayedChannels.value = newData;
      changesMade.value = true;
    };

    watch(channelData, () => {
      changesMade.value = true;
    });

    return {
      channelData,
      displayedChannels,
      searchQuery,
      handleBackgroundClick,
      onDragEnd,
      removeChannel,
      applyChanges,
      cancelChanges,
      handleInput,
      handleEnter,
      updateChannels,
      changesMade,
      debouncedHandleInput,
      toasterMessage,
      showToaster
    };
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
