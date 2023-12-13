import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

import { BaseComponent } from '@theinterview/xplat/core';

@Component({
  moduleId: module.id,
  selector: 'theinterview-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent {
  inputs = [
    {
      title: 'Day',
      disabled: false,
      canProceed: true,
      numberVal: 36,
    },
    {
      title: 'Day',
      disabled: false,
      canProceed: true,
      numberVal: null,
    },
    {
      title: 'Day',
      disabled: false,
      canProceed: true,
      numberVal: 16,
    },
    {
      title: 'Day',
      disabled: false,
      canProceed: false,
      numberVal: 8,
    },
    {
      title: 'Day',
      disabled: false,
      canProceed: true,
      numberVal: 4,
    },
  ];


  constructor(private _routerExtensions: RouterExtensions) {
    super();
  }
  goToFeature() {
    this._routerExtensions.navigate(['/feature']);
  }
}
