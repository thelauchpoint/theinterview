import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { TestFeatureBaseComponent } from '@theinterview/xplat/features';

@Component({
  selector: 'theinterview-test-feature',
  templateUrl: 'test-feature.component.html',
})
export class TestFeatureComponent extends TestFeatureBaseComponent {
  constructor(_Store: Store) {
    super(_Store);
  }
}
