<template>
  <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Wait please ...</h1>
    <h3 class="animate-pulse">Loading pokemons ...</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">What pokemon is?</h1>
    <h3>{{ randomPokemon }}</h3>
    <PokemonPicture />
    <PokemonOptions />


  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';


const { gameStatus, randomPokemon } = usePokemonGame()

</script>