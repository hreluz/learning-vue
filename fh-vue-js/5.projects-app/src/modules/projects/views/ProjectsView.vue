<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Project</th>
          <th>Tasks</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projectsStore.projectsWithCompletion" :key=project.id class="hover">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.taskCount }}</td>
          <td>
            <progress class="progress progress-primary w-56" :value="project.completion" max="100"></progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <InputModal :open="modalOpen" @close="modalOpen = false" @value="onNewValue($event)" title="New Project"
    sub-title="Inser a unique name for your project" placeholder="Insert Project name" />

  <CustomModal :open="customModalOpen">
    <template #header>
      <h1>Modal Title</h1>
    </template>
    <template #body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ea, nemo fugiat fugit delectus, tenetur
        mollitia ipsa ullam iusto quia illum laborum reiciendis repellendus consectetur modi in rerum iure magni.</p>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <div @click="customModalOpen = false" class="btn mr-4">Close</div>
        <div @click="customModalOpen = false" class="btn btn-primary">Accept</div>
      </div>
    </template>
  </CustomModal>
  <FabButton @click="modalOpen = true">
    <AddCircle />
  </FabButton>
  <FabButton @click="customModalOpen = true" position="bottom-left">
    <ModalIcon />
  </FabButton>
</template>

<script lang="ts" setup>
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/components/icons/AddCircle.vue';
import ModalIcon from '@/modules/common/components/icons/ModalIcon.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import { ref } from 'vue';
import { useProjecstStore } from '../store/project.store';


const modalOpen = ref(false)
const customModalOpen = ref(false)

const projectsStore = useProjecstStore()

const onNewValue = (projectName: string) => {
  projectsStore.addProject(projectName)
}
</script>