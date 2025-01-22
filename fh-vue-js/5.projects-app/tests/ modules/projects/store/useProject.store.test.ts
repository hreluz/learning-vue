import { useProjecstStore } from '@/modules/projects/store/project.store';
import { createPinia, setActivePinia } from 'pinia';
import { fakeProjects } from '../../../mocks/projects.fake';

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

  test('add a project - action', () => {
    const store = useProjecstStore();

    store.addProject('New Project');

    expect(store.projects.length).toBe(1);
    expect(store.projects[0]).toEqual({
      id: expect.any(String),
      name: 'New Project',
      tasks: [],
    });
  });

  test('should load from localStorage', () => {
    localStorage.setItem('projects', JSON.stringify(fakeProjects));

    const store = useProjecstStore();
    const [project1, project2] = store.projects;

    expect(project1).toEqual({
      ...fakeProjects.at(0),
      tasks: expect.any(Array),
    });
    expect(project2).toEqual(fakeProjects.at(1));

    expect(store.projects.length).toBe(3);
  });
});
