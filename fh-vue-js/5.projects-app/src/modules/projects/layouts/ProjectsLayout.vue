<template>
  <div class="flex flex-col">
    <top-menu></top-menu>
    <main class="flex flex-row">
      <side-menu></side-menu>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts" setup>
import TopMenu from '@/modules/common/components/TopMenu.vue'
import SideMenu from '@/modules/projects/components/SideMenu.vue'
</script>