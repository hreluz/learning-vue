<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>
<script setup lang="ts">
import ChatBubble from './ChatBubble.vue'
import type { ChatMessage } from '../../interfaces/chat-message.interface';
import { ref, watch } from 'vue';
interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null)

watch(props, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth'
    })
  }, 100)
})
</script>