import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);
  const isLoading = computed(() => pokemons.value.length == 0);
  const randomPokemon = computed(() => {
    return pokemonOptions.value[Math.floor(Math.random() * pokemonOptions.value.length)];
  });

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlPath = pokemon.url.split('/');
      const id = urlPath.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;

    if (hasWon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      });
    }

    gameStatus.value = GameStatus.Lost;
  };

  onMounted(async () => {
    console.log('on mounted');
    pokemons.value = await getPokemons();
    getNextRound();
    console.log(pokemonOptions.value);
    console.log('finished on mounted');
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,

    randomPokemon,

    //Methods,
    getNextRound,
    checkAnswer,
  };
};
