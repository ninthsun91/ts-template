import assert from 'node:assert';
import { describe, it } from 'node:test';

import { add } from 'src/add.js';

describe('add', () => {
  const cases = [
    [1, 2, 3],
    [3, 4, 7],
    [100, -100, 0],
  ] satisfies [number, number, number][];
  for (const [a, b, result] of cases) {
    it('should add two numbers', () => {
      assert.strictEqual(add(a, b), result);
    });
  }
});
