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

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounter } from '../composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true }
  },
  setup(props) {
    const { counter, squareCounter, add } = useCounter(props.value)

    return {
      counter,
      squareCounter,
      add
    }
  }

})
</script>