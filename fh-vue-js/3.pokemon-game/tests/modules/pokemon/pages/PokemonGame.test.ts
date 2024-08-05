import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { GameStatus } from '@/modules/pokemon/interfaces';
import PokemonGame from '@/modules/pokemon/pages/PokemonGame.vue';
import { mount } from '@vue/test-utils';
import type { Mock } from 'vitest';

vi.mock('@/modules/pokemon/composables/usePokemonGame', () => ({
  usePokemonGame: vi.fn(),
}));

const pokemonOptions = [
  {
    name: 'bulbasaur',
    id: 1,
  },
  {
    name: 'ivysaur',
    id: 2,
  },
  {
    name: 'venusaur',
    id: 3,
  },
  {
    name: 'charmander',
    id: 4,
  },
];

describe('<PokemonGame />', () => {
  test('should initialize with default values', async () => {
    (usePokemonGame as Mock).mockReturnValueOnce({
      randomPokemon: undefined,
      isLoading: true,
      gameStatus: GameStatus.Playing,
      pokemonOptions: [],
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });

    const wrapper = mount(PokemonGame);

    expect(wrapper.get('h1').text()).toBe('Wait please ...');
    expect(wrapper.get('h1').classes()).toEqual(['text-3xl']);

    expect(wrapper.get('h3').text()).toBe('Loading pokemons ...');
    expect(wrapper.get('h3').classes()).toEqual(['animate-pulse']);
  });

  test('should render <PokemonPicture/> and <PokemonOptions/>', () => {
    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: pokemonOptions.at(0),
      isLoading: false,
      gameStatus: GameStatus.Playing,
      pokemonOptions: pokemonOptions,
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });

    const wrapper = mount(PokemonGame);

    const imageUrl =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg';

    const pokemonNames = pokemonOptions.map((p) => p.name);

    expect(wrapper.find('img').attributes('src')).toBe(imageUrl);

    const buttons = wrapper.findAll('.capitalize.disabled\\:shadow-none.disabled\\:bg-gray-100');

    expect(buttons.length).toBe(4);

    buttons.forEach((b) => {
      expect(pokemonNames).toContain(b.text());
    });
  });

  test('should render button for a new game', () => {
    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: pokemonOptions.at(0),
      isLoading: false,
      gameStatus: GameStatus.Won,
      pokemonOptions: pokemonOptions,
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });

    const wrapper = mount(PokemonGame);

    const button = wrapper.find('[data-test-id="btn-new-game"]');

    expect(button.text()).toBe('New Game?');
  });

  test('should call the getNextRound function when the button is clicked', async () => {
    const spyNextRoundFn = vi.fn();

    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: pokemonOptions.at(0),
      isLoading: false,
      gameStatus: GameStatus.Won,
      pokemonOptions: pokemonOptions,
      checkAnswer: vi.fn(),
      getNextRound: spyNextRoundFn,
    });

    const wrapper = mount(PokemonGame, {
      props: {
        roundNumber: 5,
      },
    });

    const button = wrapper.find('[data-test-id="btn-new-game"]');

    await button.trigger('click');

    expect(spyNextRoundFn).toHaveBeenCalled();

    expect(spyNextRoundFn).toHaveBeenNthCalledWith(5);
  });
});
