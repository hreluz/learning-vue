<template>
  <section v-if="isLoading || randomPokemon?.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Wait please ...</h1>
    <h3 class="animate-pulse">Loading pokemons ...</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <button data-test-id="btn-new-game" v-show="gameStatus == GameStatus.Lost || gameStatus == GameStatus.Won"
      class="button bg-green-400" @click="onNextRound()">
      New Game?</button>
    <h1 class="m-5">What pokemon is?</h1>
    <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus != GameStatus.Playing" />
    <PokemonOptions :block-selection="gameStatus == GameStatus.Lost" :options="pokemonOptions"
      :correct-answer="randomPokemon.id" @selected-option="onSelectedOption" />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const { gameStatus, randomPokemon, isLoading, pokemonOptions, checkAnswer, getNextRound } = usePokemonGame()

interface Props {
  roundNumber?: number
}

const props = withDefaults(defineProps<Props>(), {
  roundNumber: 4
});

defineEmits<{
  selectedOption: [id: number];
}>();


const onSelectedOption = (value: number) => {
  checkAnswer(value)
}

const onNextRound = () => {
  getNextRound(props.roundNumber)
}

</script>