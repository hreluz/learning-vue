<template>
  <h1 class="text-3x">
    <BreadCrumbs :name="project?.name ?? 'No name'" />
  </h1>

</template>

<script lang="ts" setup>
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjecstStore } from '../store/project.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';

// import { useRoute } from 'vue-router';
interface Props {
  id: string;
}

// const route = useRoute()
// console.log(route.params.id);
const props = defineProps<Props>()

const projectStore = useProjecstStore()

const project = ref<Project | null>();


watch(() => props.id, () => {
  project.value = projectStore.projectsList.find(p => p.id == props.id);
}, {
  immediate: true
})
</script>