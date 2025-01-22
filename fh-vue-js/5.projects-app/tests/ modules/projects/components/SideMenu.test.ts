import SideMenu from '@/modules/projects/components/SideMenu.vue';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useProjecstStore } from '@/modules/projects/store/project.store';
import { fakeProjects } from '../../../mocks/projects.fake';
import { nextTick } from 'vue';

describe('<SideMenu/>', () => {
  const wrapper = mount(SideMenu, {
    global: {
      stubs: ['RouterLink'],
      plugins: [createTestingPinia],
    },
  });

  const store = useProjecstStore();

  beforeEach(() => {
    store.$patch({
      projects: [],
    });
  });

  test('should render with no projects', () => {
    expect(wrapper.html()).toContain('No projects');
  });

  test('should render with projects', async () => {
    store.$patch({
      projects: fakeProjects,
    });

    await nextTick();

    expect(wrapper.html()).not.toContain('No projects');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
