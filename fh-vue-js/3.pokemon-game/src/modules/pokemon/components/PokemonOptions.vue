<template>
  <section class="mt-5 flex flex-col">
    <button v-for="{ name, id } in options" :key="id" @click="$emit('selectedOption', id)" :disabled="blockSelection"
      :class="[
        'capitalize disabled:shadow-none disabled:bg-gray-100',
        {
          correct: id == correctAnswer && blockSelection,
          incorrect: id != correctAnswer && blockSelection
        }]">
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[],
  blockSelection: boolean,
  correctAnswer: number
}
defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();

</script>

<style scoped>
.correct {
  @apply bg-blue-500 text-white;
}

.incorrect {
  @apply bg-red-100 opacity-70;
}
</style>