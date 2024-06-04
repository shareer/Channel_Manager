import { mount } from '@vue/test-utils';
import Sidebar from './../Sidebar.vue';
import { describe, it, expect, vi } from 'vitest';

describe('Sidebar.vue', () => {
  const menuItems = [
    { name: 'Inbox', iconClass: 'fas fa-inbox' },
    { name: 'Personal', iconClass: 'fas fa-user' },
    { name: 'Reports', iconClass: 'fas fa-chart-bar' },
    { name: 'Teams', iconClass: 'fas fa-users' },
    { name: 'Channels', iconClass: 'fas fa-comments', isChannel: true }
  ];

  it('renders the menu items', () => {
    const wrapper = mount(Sidebar, {
      props: { onChannelClick: vi.fn() }
    });

    const items = wrapper.findAll('li');
    expect(items.length).toBe(menuItems.length);
    menuItems.forEach((item, index) => {
      expect(items[index].text()).toContain(item.name);
    });
  });

  it('handles click on Channels item', async () => {
    const onChannelClick = vi.fn();
    const wrapper = mount(Sidebar, {
      props: { onChannelClick }
    });

    const channelsItem = wrapper.findAll('li').find(li => li.text().includes('Channels'));
    await channelsItem.trigger('click');

    expect(onChannelClick).toHaveBeenCalled();
  });

  it('does not call onChannelClick for other items', async () => {
    const onChannelClick = vi.fn();
    const wrapper = mount(Sidebar, {
      props: { onChannelClick }
    });

    const otherItems = wrapper.findAll('li').filter(li => !li.text().includes('Channels'));
    for (const item of otherItems) {
      await item.trigger('click');
    }

    expect(onChannelClick).not.toHaveBeenCalled();
  });
});
