import App from '@/App.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';

describe('Router', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  test('renders HomePage when visiting /', async () => {
    await router.replace('/');
    await router.isReady();

    expect(wrapper.html()).toContain('Welcome to our web');
  });

  test('renders Features when visiting /features', async () => {
    await router.replace('/features');
    await router.isReady();
    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');

    await router.replace('/');
    await router.push({ name: 'features' });
    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });

  test('renders Pricing when visiting /pricing', async () => {
    await router.replace('/pricing');
    await router.isReady();
    expect(wrapper.html()).toContain('Flexible');
  });

  test('renders Contact when visiting /contact', async () => {
    await router.replace('/contact');
    await router.isReady();
    expect(wrapper.html()).toContain('Post-ironic');

    await router.replace('/');
    await router.push({ name: 'contact' });
    expect(wrapper.html()).toContain('Post-ironic');
  });
});
