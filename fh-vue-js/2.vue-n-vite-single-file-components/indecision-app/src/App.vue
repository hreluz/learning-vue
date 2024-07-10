<template>
  <h1>First App</h1>

  <hr />
  <MyCounter :value="5" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue'
</script>