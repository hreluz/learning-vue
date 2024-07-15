import { useChat } from '@/composables/useChat';
import type { i } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';

describe('useChat', () => {
  test('add messsage correctly when onMessage is called', async () => {
    const text = 'Hello World';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].itsMine).toBe(true);
    expect(messages.value[0].message).toBe(text);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('do nothing if text is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('gets her response corretly when message ends with "?"', async () => {
    const text = 'You want coffee?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 2000));

    const [myMessage, herMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(herMessage.itsMine).toBe(false);
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      message: expect.any(String),
      itsMine: false,
    });

    expect(myMessage).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('mock response - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.gif' };

    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const text = 'You want coffee?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 1600));

    const [_, herMessage] = messages.value;

    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      message: mockResponse.answer,
      itsMine: false,
    });
  });
});
