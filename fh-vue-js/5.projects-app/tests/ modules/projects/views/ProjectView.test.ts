import { useProjecstStore } from '@/modules/projects/store/project.store';
import ProjectView from '@/modules/projects/views/ProjectView.vue';
import { mount } from '@vue/test-utils';
import { fakeProjects } from '../../../mocks/projects.fake';
import { useRouter } from 'vue-router';
import type { Mock } from 'vitest';

vi.mock('vue-router');
vi.mock('@/modules/projects/store/project.store');

describe('<ProjectView />', () => {
  test('should be render with a project', () => {
    (useProjecstStore as any).mockReturnValue({
      projectsList: fakeProjects,
    });

    const wrapper = mount(ProjectView, {
      props: {
        id: '1',
      },
      global: {
        stubs: ['RouterLink'],
      },
    });

    const tableRows = wrapper.findAll('tr.hover');

    expect(tableRows.length).toBe(fakeProjects.at(0)?.tasks.length);
  });

  test('should redirect to projects if projectId not foind', () => {
    (useProjecstStore as any).mockReturnValue({
      projectsList: [],
    });

    const replaceSpy = vi.fn();
    (useRouter as Mock).mockReturnValue({
      replace: replaceSpy,
    });

    const wrapper = mount(ProjectView, {
      props: {
        id: '1',
      },
      global: {
        stubs: ['RouterLink'],
      },
    });

    expect(replaceSpy).toHaveBeenCalledWith('/');
  });
});
