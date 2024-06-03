import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { describe, it, expect, vi } from 'vitest';
import ChannelManager from './../ChannelManager.vue';
import { useChanneltore } from '@/stores/channel.store';

const mockChannels = [
    { channelName: 'Channel 1', channelIcon: 'icon1' },
    { channelName: 'Channel 2', channelIcon: 'icon2' },
];

describe('ChannelManager.vue', () => {
    let pinia;

    beforeEach(() => {
        pinia = createTestingPinia({
            initialState: {
                channel: { getChannelData: mockChannels },
            },
            stubActions: false,
        });

        // Mock the store methods if needed
        const store = useChanneltore();
        store.fetchData = vi.fn();
        store.updateChannel = vi.fn();
    });

    it('renders correctly', () => {
        const wrapper = mount(ChannelManager, {
            global: {
                plugins: [pinia],
            },
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h1').text()).toBe('Channels');
    });

    it('handles background click', async () => {
        const wrapper = mount(ChannelManager, {
            global: {
                plugins: [pinia],
            },
        });
        await wrapper.trigger('click');
        expect(wrapper.emitted()).toHaveProperty('close');
    });

    it('updates channels on drag end', async () => {
        const wrapper = mount(ChannelManager, {
            global: {
                plugins: [pinia],
            },
        });
        await wrapper.vm.onDragEnd();
        expect(wrapper.vm.changesMade).toBe(true);
    });

    it('removes a channel', async () => {
        const wrapper = mount(ChannelManager, {
            global: {
                plugins: [pinia],
            },
        });
        await wrapper.vm.removeChannel('Channel 1');
    });

    it('applies changes', async () => {
        const wrapper = mount(ChannelManager, {
            global: {
                plugins: [pinia],
            },
        });
        await wrapper.vm.applyChanges();
        expect(wrapper.vm.changesMade).toBe(false);
        expect(wrapper.vm.showToaster).toBe(true);
    });

    it('updates channels', async () => {
        const wrapper = mount(ChannelManager, {
            global: {
                plugins: [pinia],
            },
        });
        const updatedChannels = [{ channelName: 'Updated Channel', channelIcon: 'icon3' }];
        await wrapper.vm.updateChannels(updatedChannels);
        expect(wrapper.vm.changesMade).toBe(true);
    });
});
