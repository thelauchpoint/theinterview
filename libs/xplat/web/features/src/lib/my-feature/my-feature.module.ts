import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { FeatureEffects, featureReducer, FEATURE_SERVICES, FEATURE_STATE_KEY } from '@theinterview/xplat/features';
import { UIModule } from '../ui/ui.module';
import { TESTFEATURE_COMPONENTS } from './components';
import { LabelKeyCardComponent } from './components/label-key-card/label-key-card.component';

@NgModule({
  imports: [UIModule, StoreModule.forFeature(FEATURE_STATE_KEY, featureReducer), EffectsModule.forFeature([FeatureEffects])],
  exports: [UIModule],
  declarations: [TESTFEATURE_COMPONENTS, LabelKeyCardComponent],
  providers: [FEATURE_SERVICES],
})
export class MyFeatureModule {}
