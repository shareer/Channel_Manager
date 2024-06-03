// tests/unit/SidebarItem.spec.js

import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import SidebarItem from './../../atoms/SidebarItem.vue';
import Icon from '../../atoms/Icons.vue';

describe('SidebarItem.vue', () => {
  it('renders the label prop correctly', () => {
    const label = 'Test Label';
    const wrapper = shallowMount(SidebarItem, {
      props: { iconClass: 'test-icon', label }
    });

    expect(wrapper.text()).toContain(label);
  });

  it('renders the Icon component with the correct iconClass prop', () => {
    const iconClass = 'test-icon';
    const wrapper = shallowMount(SidebarItem, {
      props: { iconClass, label: 'Test Label' }
    });

    const iconComponent = wrapper.findComponent(Icon);
    expect(iconComponent.exists()).toBe(true);
    expect(iconComponent.props('iconClass')).toBe(iconClass);
  });

  it('emits a click event when clicked', async () => {
    const wrapper = shallowMount(SidebarItem, {
      props: { iconClass: 'test-icon', label: 'Test Label' }
    });

    await wrapper.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('applies the correct CSS classes', () => {
    const wrapper = shallowMount(SidebarItem, {
      props: { iconClass: 'test-icon', label: 'Test Label' }
    });

    expect(wrapper.classes()).toContain('px-4');
    expect(wrapper.classes()).toContain('py-2');
    expect(wrapper.classes()).toContain('hover:bg-gray-200');
  });
});
