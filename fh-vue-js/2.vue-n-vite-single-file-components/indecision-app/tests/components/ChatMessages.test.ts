import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hello', itsMine: true },
  { id: 2, message: 'World', itsMine: false },
];

describe('<ChatMessages />', () => {
  test('renders chat messages correctly', () => {
    const wrapper = mount(ChatMessages, {
      props: { messages },
    });

    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    expect(chatBubbles.length).toBe(messages.length);
  });
});
