import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { TestFeatureBaseComponent } from '@theinterview/xplat/features';

@Component({
  selector: 'theinterview-test-feature',
  templateUrl: 'test-feature.component.html',
})
export class TestFeatureComponent extends TestFeatureBaseComponent {
  selected_card_label:string|undefined;
  card_label = 'Policy Pol Eff Date Day'
  // UDPATE THIS, remove whichever variable you dont use above
  constructor(_Store: Store) {
    super(_Store);
  }
  actOnOutput(event:any){ //UPDATE THIS any type
    // UPDATE THIS add code
  }

}
