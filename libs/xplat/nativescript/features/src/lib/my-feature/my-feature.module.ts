import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { FeatureEffects, featureReducer, FEATURE_SERVICES, FEATURE_STATE_KEY } from '@theinterview/xplat/features';
import { UIModule } from '../ui/ui.module';
import { TestFeatureComponent } from './components/test-feature/test-feature.component';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    UIModule,
    NativeScriptCommonModule,
    CommonModule,
    StoreModule.forFeature(FEATURE_STATE_KEY, featureReducer),
    EffectsModule.forFeature([FeatureEffects]),
  ],
  exports: [TestFeatureComponent],
  declarations: [TestFeatureComponent],
  providers: [FEATURE_SERVICES],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MyFeatureModule {}
