import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@theinterview/xplat/core';
import { AppService } from '@theinterview/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
