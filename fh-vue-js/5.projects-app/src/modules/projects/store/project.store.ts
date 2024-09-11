import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Project } from '../interfaces/project.interface';

const initialLoad = (): Project[] => {
  return [
    {
      id: '1',
      name: 'Project 1',
      tasks: [],
    },
    {
      id: '2',
      name: 'Project 2',
      tasks: [],
    },
  ];
};

export const useProjecstStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initialLoad());

  return { projects };
});
