import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

import { BaseComponent } from '@theinterview/xplat/core';

@Component({
  moduleId: module.id,
  selector: 'theinterview-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent {
  constructor(private _routerExtensions: RouterExtensions) {
    super();
  }
  goToFeature() {
    this._routerExtensions.navigate(['/feature']);
  }
}
