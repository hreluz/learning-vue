<template>
  <div class="w-full">
    <section class="m-2">
      <bread-crumbs :name="project?.name ?? 'No name'" />
    </section>
    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Done</th>
              <th>Task</th>
              <th>Done at</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            <!-- row 2 -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
            <tr>
              <th></th>
              <td>
                <input type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="New task">
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjecstStore } from '../store/project.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { useRouter } from 'vue-router';

// import { useRoute } from 'vue-router';
interface Props {
  id: string;
}

// const route = useRoute()
// console.log(route.params.id);

const router = useRouter();
const props = defineProps<Props>()

const projectStore = useProjecstStore()

const project = ref<Project | null>();


watch(() => props.id, () => {
  project.value = projectStore.projectsList.find(p => p.id == props.id);

  if (!project.value) {
    router.replace('/')
  }
}, {
  immediate: true
})
</script>