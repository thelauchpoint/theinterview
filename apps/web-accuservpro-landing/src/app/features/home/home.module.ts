import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HOME_COMPONENTS, HomeComponent } from './components';
import { LANDING_SECTION_COMPONENTS } from '../sections';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), ...LANDING_SECTION_COMPONENTS],
  declarations: [...HOME_COMPONENTS],
  exports: [...HOME_COMPONENTS],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
