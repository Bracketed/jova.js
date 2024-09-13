import { createRequire } from 'node:module';

export const loadJSON = async (path: string) => await createRequire(import.meta.url)(path);
