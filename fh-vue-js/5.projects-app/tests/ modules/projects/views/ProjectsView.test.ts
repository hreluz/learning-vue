import { useProjecstStore } from '@/modules/projects/store/project.store';
import ProjectsView from '@/modules/projects/views/ProjectsView.vue';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { fakeProjects } from '../../../mocks/projects.fake';

describe('<ProjectsView />', () => {
  const wrapper = mount(ProjectsView, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  const store = useProjecstStore();

  beforeEach(() => {
    store.$patch({
      projects: fakeProjects,
    });
  });

  test('should be render with projects', () => {
    const tableRows = wrapper.findAll('tbody tr');

    expect(tableRows.length).toBe(4);

    tableRows.forEach((row, index) => {
      const project = fakeProjects[index];
      const cell = row.findAll('td');

      expect(cell.at(0)?.text()).toBe(project.name);
    });
  });

  test('should call addProject method on modal', () => {
    const inputModal = wrapper.findComponent({ name: 'InputModal' });

    const newProjectName = 'New Project';

    inputModal.vm.$emit('value', 'New Project');

    expect(store.addProject).toHaveBeenCalled();
    expect(store.addProject).toHaveBeenCalledWith(newProjectName);
  });
});
