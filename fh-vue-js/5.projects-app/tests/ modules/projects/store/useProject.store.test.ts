import { useProjecstStore } from '@/modules/projects/store/project.store';
import { createPinia, setActivePinia } from 'pinia';

describe('useProjectsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  test('should return default values', () => {
    const {
      noProjects,
      addProject,
      addTaskToProject,
      projectsList,
      projectsWithCompletion,
      projects,
      toggleTask,
    } = useProjecstStore();

    expect(noProjects).toBe(true);
    expect(projectsList).toEqual([]);
    expect(projectsWithCompletion).toEqual([]);
    expect(projects).toEqual([]);

    expect(addTaskToProject).toBeInstanceOf(Function);
    expect(addProject).toBeInstanceOf(Function);
    expect(toggleTask).toBeInstanceOf(Function);
  });
});
