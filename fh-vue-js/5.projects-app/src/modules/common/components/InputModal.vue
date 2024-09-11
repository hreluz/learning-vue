<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-4">{{ subTitle }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input ref="inputRef" v-model="inputValue" type="text" :placeholder="placeholder ?? 'Insert a value'"
            class="input input-bordered input-primary w-full flex-1">
          <!-- if there is a button in form, it will close the modal -->

          <div class="flex justify-end mt-5">
            <button @click="close" type="button" class="btn mr-4">Close</button>
            <button type="submit" class="btn btn-primary">Accept</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div v-if="open" class="modal-backgrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  open: boolean,
  title: string,
  subTitle?: string,
  placeholder?: string
}

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('')

const inputRef = ref<HTMLInputElement | null>(null)

defineProps<Props>()

const submitValue = () => {
  console.log(inputValue.value);
  if (!inputValue.value) {
    inputRef.value?.focus();
    return
  }

  emits('value', inputValue.value.trim())
  emits('close');
  inputValue.value = '';
}


const close = () => {
  console.log('calls')
  emits('close');
}

</script>