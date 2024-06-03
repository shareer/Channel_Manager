import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Toast from './../../atoms/Toast.vue';

describe('Toast.vue', () => {
  it('renders the message prop correctly', () => {
    const message = 'This is a toast message';
    const wrapper = shallowMount(Toast, {
      props: { message, show: true }
    });

    expect(wrapper.text()).toContain(message);
  });

  it('is visible when the show prop is true', () => {
    const wrapper = shallowMount(Toast, {
      props: { message: 'Test Message', show: true }
    });

    expect(wrapper.isVisible()).toBe(true);
  });

  it('is not visible when the show prop is false', () => {
    const wrapper = shallowMount(Toast, {
      props: { message: 'Test Message', show: false }
    });

    expect(wrapper.isVisible()).toBe(false);
  });

  it('applies the correct CSS classes', () => {
    const wrapper = shallowMount(Toast, {
      props: { message: 'Test Message', show: true }
    });

    expect(wrapper.classes()).toContain('fixed');
    expect(wrapper.classes()).toContain('bottom-5');
    expect(wrapper.classes()).toContain('right-5');
    expect(wrapper.classes()).toContain('bg-green-500');
    expect(wrapper.classes()).toContain('text-white');
    expect(wrapper.classes()).toContain('py-2');
    expect(wrapper.classes()).toContain('px-4');
    expect(wrapper.classes()).toContain('rounded-md');
    expect(wrapper.classes()).toContain('shadow-md');
  });
});
