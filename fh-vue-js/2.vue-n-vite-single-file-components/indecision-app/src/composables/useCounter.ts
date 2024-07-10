import { ref, computed } from 'vue';

export const useCounter = (initialValue: number = 10) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value * counter.value);

  const add = (n: number) => {
    counter.value += n;
  };

  return {
    counter,
    squareCounter,
    add,
  };
};
