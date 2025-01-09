import { createPinia } from 'pinia';

vi.mock('@/router', () => ({
  default: 'router',
}));

describe('Main.ts', () => {
  const vue = require('vue');

  const useSpy = vi.fn();
  const mountSpy = vi.fn();

  const createApp = vi.fn().mockReturnValue({
    use: useSpy,
    mount: mountSpy,
  });

  vi.mock('pinia', async (importOriginal) => {
    const mod: any = await importOriginal();

    return {
      ...mod,
      createPinia: vi.fn().mockReturnValue('pinia'),
    };
  });

  vue.createApp = createApp;

  test('should be configured with pinia and router', async () => {
    await import('@/main');

    expect(vue.createApp).toHaveBeenCalled();
    expect(mountSpy).toHaveBeenCalledWith('#app');

    expect(useSpy).toHaveBeenCalledWith('router');
    expect(useSpy).toHaveBeenCalledWith('pinia');
  });
});
