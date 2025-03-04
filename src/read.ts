import fs from 'node:fs/promises';

export async function read(path: string): Promise<string> {
  return fs.readFile(path, 'utf-8');
}
