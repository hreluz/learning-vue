<template>
  <aside class="bg-base-200 w-72 min-h-screen">
    <h2 class="text-lg font-bold mx-4">
      <RouterLink to="/">Projects</RouterLink>
    </h2>
    <p v-if="projectsStore.noProjects" class="text-sm text-gray-500 m-4">No projects</p>

    <ul class="menu rounded-box w-56">
      <li v-for="project in projectsStore.projectsList" :key="project.id">
        <template v-if="project.tasks.length > 0">
          <details>
            <summary>{{ project.name }}</summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <RouterLink :to="`/project/${project.id}`">
                  {{ task.name }}
                </RouterLink>
              </li>
            </ul>
          </details>
        </template>
        <template v-else>

          <RouterLink :to="`/project/${project.id}`">
            {{ project.name }}
          </RouterLink>
        </template>
      </li>
    </ul>
  </aside>
</template>
<script lang="ts" setup>
import { useProjecstStore } from '../store/project.store';
const projectsStore = useProjecstStore()

</script>