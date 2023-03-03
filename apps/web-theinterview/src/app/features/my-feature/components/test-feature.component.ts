import { Component } from '@angular/core';
import { BaseComponent } from '@theinterview/xplat/core';

@Component({
  selector: 'theinterview-feature',
  templateUrl: 'test-feature.component.html',
})
export class FeatureComponent extends BaseComponent {
  constructor() {
    super();
  }
}
