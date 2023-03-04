import { Directive } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseComponent } from '@theinterview/xplat/core';
import { Observable } from 'rxjs';
import { selectFeatureError, selectSelectedFeature } from './feature.selector';
import { FeatureEntityState } from './interface/state.interface';

@Directive()
export abstract class TestFeatureStateBaseComponent extends BaseComponent {
  error$: Observable<{ statusCode?: string; error: string; message: string } | null>;
  feature$: Observable<FeatureEntityState | undefined>;
  // featureLabels$: Observable<{ label: string; key: string }[]>;
  
  constructor(public _Store: Store) {
    super();
    this.error$ = this._Store.select(selectFeatureError);
    this.feature$ = this._Store.select(selectSelectedFeature);
  }
}
