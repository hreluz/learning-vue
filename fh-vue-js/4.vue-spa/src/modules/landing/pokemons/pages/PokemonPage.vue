<template>
  <section class="flex flex-col">
    <h1>Pokemon <small class="text-blue-500">#{{ id }}</small></h1>

    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      class="w-[200px] h-[200px] mt-5" width="200" height="200" alt="Pokemon">

    <RouterLink class="bg-blue-500 text-white p-2 rounded mt-5 text-center hover:bg-blue-700"
      :to="{ name: 'pokemon', params: { id: (id + 1) } }">
      Next
    </RouterLink>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  id: number
}

const props = defineProps<Props>()
</script>