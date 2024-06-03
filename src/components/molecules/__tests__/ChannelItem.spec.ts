import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ChannelItem from './../ChannelItem.vue';
import Button from './../../atoms/Buttons.vue';

describe('ChannelItem.vue', () => {


    it('renders the channel item with correct data', () => {
        const channel = { channelName: 'Test Channel', channelIcon: 'fa-solid fa-tv' };
        const wrapper = mount(ChannelItem, {
            props: { channel }
        });

        // Check that the channel name is rendered correctly
        expect(wrapper.find('span').text()).toBe('Test Channel');

        // Check that the correct icon class is applied
        expect(wrapper.find('i.text-black').classes()).toContain('fa-tv');
    });

    it('emits remove event with channel name when remove button is clicked', async () => {
        const channel = { channelName: 'Test Channel', channelIcon: 'fa-solid fa-tv' };
        const wrapper = mount(ChannelItem, {
            props: { channel },
            global: {
                components: {
                    Button
                }
            }
        });

        // Simulate clicking the remove button
        await wrapper.findComponent(Button).trigger('click');

        // Check that the remove event is emitted with the correct channel name
        expect(wrapper.emitted().remove).toBeTruthy();
        expect(wrapper.emitted().remove[0]).toEqual(['Test Channel']);
    });
});
