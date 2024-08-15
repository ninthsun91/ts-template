import assert from 'node:assert';
import fs from 'node:fs/promises';
import { describe, it, mock } from 'node:test';

import { read } from './read';

describe('read', () => {
  it('should read a file', async () => {
    const mockImpl = async () => 'file content\n';
    const mockReadFile = mock.method(fs, 'readFile', mockImpl);

    assert.strictEqual(await read('file.txt'), 'file content\n');
    assert.strictEqual(mockReadFile.mock.calls.length, 1);
  });
});
