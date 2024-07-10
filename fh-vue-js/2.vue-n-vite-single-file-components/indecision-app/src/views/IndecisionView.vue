<!-- src: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>My wife</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox />
  </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { ChatMessage } from '../interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: "Hello World",
    itsMine: true
  },
  {
    id: new Date().getTime(),
    message: "No",
    itsMine: false,
    image: "https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif"
  }
]);
</script>