import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Button from './../../atoms/Buttons.vue';

describe('Button.vue', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click Me'
      }
    });
    expect(wrapper.text()).toBe('Click Me');
  });

  it('applies the correct class for primary variant', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('bg-black');
    expect(wrapper.classes()).toContain('text-white');
    expect(wrapper.classes()).toContain('hover:bg-gray-800');
  });

  it('applies the correct class for secondary variant', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'secondary'
      }
    });
    expect(wrapper.classes()).toContain('bg-white');
    expect(wrapper.classes()).toContain('text-black');
    expect(wrapper.classes()).toContain('border');
    expect(wrapper.classes()).toContain('border-black');
    expect(wrapper.classes()).toContain('hover:bg-gray-100');
  });

  it('applies the correct class for default variant', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'default'
      }
    });
    expect(wrapper.classes()).toContain('bg-white');
    expect(wrapper.classes()).toContain('text-black');
    expect(wrapper.classes()).not.toContain('border');
    expect(wrapper.classes()).not.toContain('hover:bg-gray-800');
    expect(wrapper.classes()).not.toContain('hover:bg-gray-100');
  });

});
