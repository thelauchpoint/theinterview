import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { MyFeatureModule, TestFeatureComponent } from '@theinterview/xplat/nativescript/features';
import { FEATURE_COMPONENTS } from '.';
import { SharedModule } from '../shared/shared.module';
import { FeatureComponent } from './components/test-feature.component';

export const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: '',
        component: TestFeatureComponent,
      },
    ],
  },
];

@NgModule({
  imports: [MyFeatureModule, SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [FEATURE_COMPONENTS],
  exports: [FEATURE_COMPONENTS],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeatureModule {}
