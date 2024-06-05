import assert from 'node:assert'
import { describe, it } from 'node:test'

import { add } from 'src/add'

describe('add', () => {
  const cases = [
    [1, 2, 3],
    [3, 4, 7],
    [100, -100, 0]
  ]
  for (const [a, b, result] of cases) {
    it('should add two numbers', () => {
      assert.strictEqual(add(a, b), result)
    })
  }
})
