import { GameStatus } from '@/modules/pokemon/interfaces';

describe('GameStatus enum', () => {
  test('should have a value of "playing"', () => {
    expect(GameStatus.Playing).toBe('playing');
  });

  test('should have a value of "won"', () => {
    expect(GameStatus.Playing).toBe('won');
  });

  test('should have a value of "lost"', () => {
    expect(GameStatus.Playing).toBe('lost');
  });
});
