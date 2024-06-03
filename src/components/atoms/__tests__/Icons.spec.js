import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Icons from './../../atoms/Icons.vue';

describe('Icons.vue', () => {
  it('renders the correct icon class', () => {
    const iconClass = 'fa fa-home';
    const wrapper = mount(Icons, {
      props: { iconClass }
    });
    const iElement = wrapper.find('i');
    
    // Check if the element contains the classes
    expect(iElement.classes()).toContain('w-5');
    expect(iElement.classes()).toContain('h-5');
    expect(iElement.classes()).toContain('mr-2');
    expect(iElement.classes()).toContain('fa');
    expect(iElement.classes()).toContain('fa-home');
  });

  it('renders with dynamic icon classes', () => {
    const iconClass = 'material-icons';
    const wrapper = mount(Icons, {
      props: { iconClass }
    });
    const iElement = wrapper.find('i');

    // Check if the element contains the dynamic class
    expect(iElement.classes()).toContain('w-5');
    expect(iElement.classes()).toContain('h-5');
    expect(iElement.classes()).toContain('mr-2');
    expect(iElement.classes()).toContain('material-icons');
  });

  it('renders with multiple dynamic classes', () => {
    const iconClass = 'fas fa-check-circle text-green-500';
    const wrapper = mount(Icons, {
      props: { iconClass }
    });
    const iElement = wrapper.find('i');

    // Check if the element contains multiple dynamic classes
    expect(iElement.classes()).toContain('w-5');
    expect(iElement.classes()).toContain('h-5');
    expect(iElement.classes()).toContain('mr-2');
    expect(iElement.classes()).toContain('fas');
    expect(iElement.classes()).toContain('fa-check-circle');
    expect(iElement.classes()).toContain('text-green-500');
  });
});
