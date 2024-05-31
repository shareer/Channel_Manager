ChannelItem.vue
<template>
  <li class="flex items-center justify-between py-2">
    <div class="flex items-center space-x-5">
      <i class="fa-solid fa-grip-vertical text-gray-300 cursor-pointer hover:text-black drag-handle"></i>
      <div class="bg-gray-300 py-0.5 px-2 rounded text-white">
        <i :class="`${channel.channelIcon} text-black`"></i>
      </div>
      <span class="text-gray-700 inline-block truncate" style="max-width: 200px;" :title="channel.channelName">{{ channel.channelName }}</span>
    </div>
    <Button class="text-gray-500 cursor-pointer hover:text-black" variant="default" @click="$emit('remove', channel.channelName)">Remove</Button>
  </li>
</template>


<script>
import Button from '../atoms/Buttons.vue';
export default {
  name: 'ChannelItem',
    components: {
    Button
  },
  props: {
    channel: Object
  }
};
</script>