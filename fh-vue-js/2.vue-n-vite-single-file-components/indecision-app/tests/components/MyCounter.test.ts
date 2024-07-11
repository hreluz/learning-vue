import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);
  });
});
