import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';
const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock ChatMESSAGES</div>',
};

describe('<IndecisionView />', () => {
  test('renders chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView);

    expect(wrapper.html).toMatchSnapshot();

    expect(wrapper.findComponent(ChatMessages).exists()).toBeTruthy();
    expect(wrapper.findComponent(MessageBox).exists()).toBeTruthy();
  });

  test('calls onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });

    const messageBoxComponent = wrapper.findComponent(MessageBox);
    messageBoxComponent.vm.$emit('sendMessage', 'Hello World');

    await new Promise((r) => setTimeout(r, 150));

    expect(wrapper.html()).toMatchSnapshot();
  });
});
