import { renderSuspended } from '@nuxt/test-utils/runtime';
import Index from '../index.vue';
import { screen } from '@testing-library/vue';
import { createPinia } from 'pinia';

beforeEach(() => {
  vi.useFakeTimers();
})

it('should show date 1', async () => {
  vi.setSystemTime('2024-01-01');

  await renderSuspended(Index, {
    global: {
      plugins: [createPinia()],
    }
  });

  const element = screen.getByText(/Current date/i);

  expect(element.innerHTML).toMatch(/^Current date is: 2024-01-01/i)
});

it('should show date 2', async () => {
  vi.setSystemTime('2024-02-01');

  await renderSuspended(Index, {
    global: {
      plugins: [createPinia()],
    }
  });

  const element = screen.getByText(/Current date/i);

  expect(element.innerHTML).toMatch(/^Current date is: 2024-02-01/i)
});
