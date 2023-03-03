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

  // Take the data and display it in a NativeScript ListView

  // The list only needs to display the label of the data in each item
  // When an item is tapped, it should console log the label string
}
