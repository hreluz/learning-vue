import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

export const useProjecstStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length == 0) return;

    projects.value.push({
      id: uuidv4(),
      name,
      tasks: [],
    });
  };

  const addTaskToProject = (name: string, project: Project) => {
    if (name.trim().length == 0) return;

    project.tasks.push({
      id: uuidv4(),
      name: name,
    });
  };

  return {
    //Properties
    projects,

    //Getters
    projectsList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    //Actions
    addProject,
    addTaskToProject,
  };
});
