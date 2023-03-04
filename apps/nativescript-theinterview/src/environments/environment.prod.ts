import { environmentBase } from './environment.base';
import { IEnvironment } from '@theinterview/xplat/core';
import { environmentProd } from '@theinterview/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});