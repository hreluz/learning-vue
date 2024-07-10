<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="add(1)">+1</button>
      <button @click="add(-1)">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// const props = defineProps({
//   value: {
//     type: Number,
//     required: true
//   }
// })

interface Props {
  value: number;
}

const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value)

const add = (n: number) => {
  counter.value += n
}
</script>

<style scoped>
h1 {
  color: green
}
</style>