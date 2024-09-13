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

  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id == projectId);
    if (!project) return;

    const task = project.tasks.find((t) => t.id == taskId);

    if (!task) return;

    task.completedAt = task.completedAt ? undefined : new Date();
  };

  return {
    //Properties
    projects,

    //Getters
    projectsList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const total = project.tasks.length;

        const completed = project.tasks.filter((t) => t.completedAt).length;

        const completion = total === 0 ? 0 : (completed / total) * 100;
        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completion: Math.round(completion),
        };
      });
    }),

    //Actions
    addProject,
    addTaskToProject,
    toggleTask,
  };
});
