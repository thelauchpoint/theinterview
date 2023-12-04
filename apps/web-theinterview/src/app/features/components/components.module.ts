import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsComponent } from './components.component';
import { TestCardComponent } from './card';
import { DayStepComponent } from './day-step/day-step.component';

const STANDALONE_COMPONENTS = [TestCardComponent, DayStepComponent];

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
