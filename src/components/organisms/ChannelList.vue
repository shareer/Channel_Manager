<template>
  <draggable 
    tag="ul" 
    :list="channels"
    class="space-y-2 mb-4 px-4 py-4" 
    item-key="channelName" 
    handle=".drag-handle" 
    ghost-class="moving-item"
    @end="onDragEnd"
  >
    <template #item="{ element }">
      <ChannelItem :channel="element" @remove="removeChannel" />
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import ChannelItem from '../molecules/ChannelItem.vue';

export default {
  name: 'ChannelList',
  components: {
    draggable,
    ChannelItem
  },
  props: {
    channels: Array
  },
  methods: {
    onDragEnd() {
      this.$emit('update:channels', this.channels);
      this.$emit('dragEnd');
    },
    removeChannel(channelName) {
      const updatedChannels = this.channels.filter(channel => channel.channelName !== channelName);
      this.$emit('update:channels', updatedChannels);
    }
  }
};
</script>

<style scoped>
.moving-item {
  opacity: 0.5;
  background-color: #f0f0f0;
}
</style>
