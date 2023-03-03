import { Directive, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseComponent } from '@theinterview/xplat/core';
import { getFeature } from '../state';
import { TestFeatureStateBaseComponent } from '../state/test-feature.state-base-component';

@Directive()
export abstract class TestFeatureBaseComponent extends TestFeatureStateBaseComponent implements OnInit {
  public text = 'TestFeature';

  constructor(_Store: Store) {
    super(_Store);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._Store.dispatch(getFeature());
  }
}
