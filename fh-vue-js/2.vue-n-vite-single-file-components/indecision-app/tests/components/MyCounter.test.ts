import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
  });
});
