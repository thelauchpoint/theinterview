import { IEnvironment } from '@theinterview/xplat/core';
import { deepMerge } from '@theinterview/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
