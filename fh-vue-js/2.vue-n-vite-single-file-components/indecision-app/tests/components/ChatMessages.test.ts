import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import ChatBubble from '@/components/chat/ChatBubble.vue';

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

  test('scrolls down to the bottom after messages update', async () => {
    const scrollToMock = vi.fn();

    const wrapper = mount(ChatMessages, {
      props: { messages },
    });

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Hey', itsMine: true }],
    });

    await new Promise((r) => setTimeout(r, 150));

    expect(scrollToMock).toHaveBeenCalled();
    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    });
  });
});
