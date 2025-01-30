<template>
  <div class="flex justify-center space-x-3 py-10 bg-gray-100">
    <button class="flex items-center space-x1.5 rounded-lg px-4 py-1.5 text-white bg-blue-500 disabled:bg-gray-300">
      <ArrowLeftIcon />
      <span>Previous</span>
    </button>
    <button class="flex items-center space-x1.5 rounded-lg px-4 py-1.5 text-white bg-blue-500 disabled:bg-gray-300">
      <span>Next</span>
      <ArrowRightIcon />
    </button>
  </div>
</template>
<script setup lang="ts">
import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';

interface Props { }

defineProps<Props>()
</script>
