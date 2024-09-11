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
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
  </div>

  <InputModal :open="modalOpen" @close="modalOpen = false" @value="onNewValue($event)" title="New Project"
    sub-title="Inser a unique name for your project" placeholder="Insert Project name" />
  <FabButton @click="modalOpen = true">
    <AddCircle />
  </FabButton>
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/components/icons/AddCircle.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import { ref } from 'vue';


const modalOpen = ref(false)

const onNewValue = (projectName: string) => {
  console.log({ projectName });
}
</script>