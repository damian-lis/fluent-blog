import fs from 'fs';
import { join } from 'path';

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  const files = fs.readdirSync(directory);

  return files;
};
