<template>
  <div class="fixed inset-0 flex items-center justify-center" @click="handleBackgroundClick">
    <div class="bg-white p-4 pb-8 pt-8 rounded-lg shadow-lg max-w-md mx-auto relative min-w-[450px]" @click.stop>
      <h1 class="text-xl mb-2">Channels</h1>
      <div class="flex flex-col space-y-2 rounded-md">
        <SearchBar ref="searchBar" placeholder="Add Channel" v-model="searchQuery" @enter="handleEnter" />
        <div class="max-h-96 overflow-y-auto">
          <ChannelList :channels="displayedChannels" @update:channels="updateChannels" @dragEnd="onDragEnd" @remove="removeChannel" />
        </div>
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
import { ref, onMounted } from 'vue';
import SearchBar from '../molecules/SearchBar.vue';
import ChannelList from '../organisms/ChannelList.vue';
import Button from '../atoms/Buttons.vue';
import Toast from '../atoms/Toast.vue';
import { useChanneltore } from '@/stores/channel.store';
import {ICONS} from '../../constants/constants'

export default {
  name: 'ChannelManager',
  components: {
    SearchBar,
    ChannelList,
    Button,
    Toast
  },
  setup(props, { emit }) {
    const channelData = ref([]);
    const displayedChannels = ref([]);
    const searchQuery = ref('');
    const changesMade = ref(false);
    const toasterMessage = ref('');
    const showToaster = ref(false);
    const dataStore = useChanneltore();

    const resetChannels = () => {
      const channelList = dataStore.getChannelData;
      channelData.value = channelList;
      displayedChannels.value = channelList;
    };

    onMounted(() => {
      if (!dataStore.getChannelData.length) {
        dataStore.fetchData();
      }
      resetChannels();
    });

    const handleBackgroundClick = () => {
      emit('close');
    };

    const onDragEnd = () => {
      changesMade.value = true;
    };

    const removeChannel = (channelName) => {
      updateChannelData(channelData.value.filter(channel => channel.channelName !== channelName));
    };

    const showToast = (message) => {
      toasterMessage.value = message;
      showToaster.value = true;
      setTimeout(() => {
        showToaster.value = false;
      }, 2000);
    };

    const applyChanges = () => {
      changesMade.value = false;
      showToast('Channels updated successfully');
      dataStore.updateChannel(channelData.value);
    };

    const cancelChanges = () => {
      displayedChannels.value = [...channelData.value];
      changesMade.value = false;
      resetChannels();
    };

    const handleEnter = (input) => {
      const normalizedInput = input.toLowerCase();
      const match = channelData.value.some(channel => channel.channelName.toLowerCase().includes(normalizedInput));
      if (!match) {
        const randomIcon = ICONS[Math.floor(Math.random() * ICONS.length)];
        const newChannel = { channelName: input, channelIcon: randomIcon };
        updateChannelData([newChannel, ...channelData.value]);
        showToast('New Channel added successfully');
        searchQuery.value = '';
      } else {
        displayedChannels.value = channelData.value.filter(channel =>
          channel.channelName.toLowerCase().includes(normalizedInput)
        );
      }
    };

    const updateChannels = (updatedChannels) => {
      updateChannelData(updatedChannels);
    };

    const updateChannelData = (newData) => {
      channelData.value = newData;
      displayedChannels.value = newData;
      changesMade.value = true;
    };

    return {
      channelData,
      displayedChannels,
      searchQuery,
      changesMade,
      toasterMessage,
      showToaster,
      handleBackgroundClick,
      onDragEnd,
      removeChannel,
      applyChanges,
      cancelChanges,
      handleEnter,
      updateChannels
    };
  }
};
</script>
