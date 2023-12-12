import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TestCardComponent } from './card';
import { ComponentsComponent } from './components.component';
import { CourtV2Component } from './court-v2/court-v2.component';
import { DayStepComponent } from './day-step/day-step.component';

const STANDALONE_COMPONENTS = [TestCardComponent, DayStepComponent, CourtV2Component];

export const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), ...STANDALONE_COMPONENTS],
  exports: [],
  declarations: [ComponentsComponent],
  providers: [],
})
export class ComponentsModule {}
