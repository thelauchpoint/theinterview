import { Controller, Get } from '@nestjs/common';
import { IFeatureController } from '@theinterview/core-types';

import { AppService } from './app.service';

@Controller()
export class AppController implements IFeatureController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
    return this.appService.getData();
  }
}
