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

  test('add task to a project', () => {
    const store = useProjecstStore();

    store.addProject('New Project');

    const project = store.projects.at(0)!;

    const taskName = 'New Task';

    store.addTaskToProject(taskName, project);

    expect(project.tasks.length).toBe(1);
    expect(project.tasks.at(0)).toEqual({
      id: expect.any(String),
      name: taskName,
      completedAt: undefined,
    });
  });

  test('toggles a task', () => {
    const store = useProjecstStore();

    store.addProject('New Project');

    const project = store.projects.at(0)!;

    const taskName = 'New Task';

    store.addTaskToProject(taskName, project);

    const task = project.tasks.at(0)!;

    store.toggleTask(project.id, task.id);

    expect(task).toEqual({
      id: expect.any(String),
      name: taskName,
      completedAt: expect.any(Date),
    });

    expect(task.completedAt).toBeInstanceOf(Date);
  });
});
