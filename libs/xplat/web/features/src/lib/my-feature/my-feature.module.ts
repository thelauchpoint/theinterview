import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { FeatureEffects, featureReducer, FEATURE_SERVICES, FEATURE_STATE_KEY } from '@theinterview/xplat/features';
import { UIModule } from '../ui/ui.module';
import { TESTFEATURE_COMPONENTS } from './components';

@NgModule({
  imports: [UIModule, StoreModule.forFeature(FEATURE_STATE_KEY, featureReducer), EffectsModule.forFeature([FeatureEffects])],
  exports: [UIModule],
  declarations: [TESTFEATURE_COMPONENTS],
  providers: [FEATURE_SERVICES],
})
export class MyFeatureModule {}
