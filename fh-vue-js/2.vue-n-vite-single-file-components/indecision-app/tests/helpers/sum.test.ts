import { expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';
import { describe } from 'node:test';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    expect(addArray([])).toBe(0);
  });

  test('should return 6 if the array is 1,2,3', () => {
    expect(addArray([1, 2, 3])).toBe(6);
  });
});
