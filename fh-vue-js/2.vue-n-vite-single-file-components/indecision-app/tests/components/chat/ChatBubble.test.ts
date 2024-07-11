import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBuble/>', () => {
  test('renders own message correctly', () => {
    const message = 'Hello World';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('renders received message correctly', () => {
    const message = 'Hello World';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('img').exists()).toBe(false);
  });

  test('renders received message correctly with image', () => {
    const message = 'Hello World';
    const image = 'http//image.jpeg';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        image,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
