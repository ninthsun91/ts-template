import fs from 'node:fs/promises'

export async function read (path: string): Promise<string> {
  return await fs.readFile(path, 'utf-8')
}
