import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchBar from './../SearchBar.vue';

describe('SearchBar.vue', () => {
    it('renders the search input with placeholder', () => {
        const placeholder = 'Search...';
        const wrapper = mount(SearchBar, {
            props: { placeholder }
        });
        const input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        expect(input.attributes('placeholder')).toBe(placeholder);
    });

    it('updates the model value on input', async () => {
        const wrapper = mount(SearchBar, {
            props: { modelValue: '' }
        });
        const input = wrapper.find('input');
        await input.setValue('new value');
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        expect(wrapper.emitted('update:modelValue')[0]).toEqual(['new value']);
    });

    it('emits enter event with model value on Enter key press', async () => {
        const wrapper = mount(SearchBar, {
            props: { modelValue: 'test value' }
        });
        const input = wrapper.find('input');
        await input.trigger('keyup.enter');
        expect(wrapper.emitted('enter')).toBeTruthy();
        expect(wrapper.emitted('enter')[0]).toEqual(['test value']);
    });

});
