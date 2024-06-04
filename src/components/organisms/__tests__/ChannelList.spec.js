import { mount } from '@vue/test-utils';
import ChannelList from './../ChannelList.vue';
import ChannelItem from './../../molecules/ChannelItem.vue';
import draggable from 'vuedraggable';
import { describe, it, expect, vi } from 'vitest';

describe('ChannelList.vue', () => {
  const channels = [
    { channelName: 'Channel 1' },
    { channelName: 'Channel 2' },
    { channelName: 'Channel 3' },
  ];

  it('renders the list of channels', () => {
    const wrapper = mount(ChannelList, {
      props: { channels }
    });

    const items = wrapper.findAllComponents(ChannelItem);
    expect(items.length).toBe(channels.length);
  });

  it('emits update:channels and dragEnd on drag end', async () => {
    const wrapper = mount(ChannelList, {
      props: { channels }
    });

    await wrapper.findComponent(draggable).vm.$emit('end');

    expect(wrapper.emitted('update:channels')).toBeTruthy();
    expect(wrapper.emitted('dragEnd')).toBeTruthy();
    expect(wrapper.emitted('update:channels')[0][0]).toEqual(channels);
  });

  it('removes a channel and emits update:channels', async () => {
    const wrapper = mount(ChannelList, {
      props: { channels }
    });

    const channelItem = wrapper.findComponent(ChannelItem);
    await channelItem.vm.$emit('remove', 'Channel 1');

    const updatedChannels = channels.filter(channel => channel.channelName !== 'Channel 1');
    expect(wrapper.emitted('update:channels')).toBeTruthy();
    expect(wrapper.emitted('update:channels')[0][0]).toEqual(updatedChannels);
  });
});
