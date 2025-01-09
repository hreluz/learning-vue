import FabButton from '@/modules/common/components/FabButton.vue';
import { shallowMount } from '@vue/test-utils';

describe('<FabButton />', () => {
  test('renders with default position', () => {
    const wrapper = shallowMount(FabButton);

    expect(wrapper.props().position).toBe('bottom-right');

    const buttonClasses = wrapper.find('button').classes();

    expect(buttonClasses).toEqual(['btn', 'btn-circle', 'btn-secondary', 'fixed', 'bottom-right']);
  });

  test('renders with top-left position', () => {
    const wrapper = shallowMount(FabButton, {
      props: {
        position: 'top-right',
      },
    });

    const button = wrapper.find('button');

    expect(button.classes()).toContain('top-right');
  });
});
