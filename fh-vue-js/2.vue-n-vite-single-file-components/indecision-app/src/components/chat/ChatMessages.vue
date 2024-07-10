<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :its-mine="true" message="I am Batman" />
      <ChatBubble :its-mine="false" message="No"
        image="https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif" />

    </div>
  </div>
</template>
<script setup lang="ts">
import ChatBubble from './ChatBubble.vue'
</script>