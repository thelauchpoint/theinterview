import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FeatureComponent } from './components/test-feature.component';
import { MyFeatureModule, TestFeatureComponent } from '@theinterview/xplat/web/features';

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
  imports: [MyFeatureModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [FeatureComponent],
  providers: [],
})
export class FeatureModule {}
