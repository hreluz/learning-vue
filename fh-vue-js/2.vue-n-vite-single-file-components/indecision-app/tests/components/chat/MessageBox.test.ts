import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { wrap } from 'module';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);

  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button svg').exists()).toBeTruthy();
  });

  test('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hello World';

    await wrapper.find('input[type="text"]').setValue(message);

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect(wrapper.vm.message as any).toBe('');
  });

  test('emits sendMessage event when keypress.enter is triggered with message', async () => {
    const message = 'Hello World';

    const input = wrapper.find('input');

    await input.setValue(message);

    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('emits sendMessage event when keypress.enter is triggered with no message', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');

    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toBeFalsy;
  });
});
