import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<PokemonPicture />', () => {
  const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg`;

  test('should match snapshot', () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId: 25,
        showPokemon: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should show pokemon image', () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId: 25,
        showPokemon: true,
      },
    });

    const image = wrapper.find('img');

    expect(image.attributes('src')).toBe(imageSource);

    expect(image.attributes()).toEqual(
      expect.objectContaining({
        class: 'fade-in h-[200px]',
        src: imageSource,
        alt: '',
      }),
    );
  });

  test('should render the hidden image when showPokemon prop is false', () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId: 25,
        showPokemon: false,
      },
    });

    expect(wrapper.find('img').classes('brightness-0')).toBe(true);
  });

  test('should render the hidden image when showPokemon prop is false', () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId: 25,
        showPokemon: true,
      },
    });

    expect(wrapper.find('img').classes('fade-in')).toBe(true);
  });
});
