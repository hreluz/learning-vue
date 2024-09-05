import App from '@/App.vue';
import router from '@/router';
import { mount, shallowMount } from '@vue/test-utils';

describe('<App />', () => {
  test('should render correctly', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });

    const routerView = wrapper.findComponent({ name: 'RouterView' });

    expect(routerView.exists()).toBe(true);
  });
});
