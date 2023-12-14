import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberStepperComponent } from '@theinterview/xplat/web/features';
import { SharedModule } from '../shared/shared.module';
import { TestCardComponent } from './card';
import { ComponentsComponent } from './components.component';
import { DayStepComponent } from './day-step/day-step.component';

const STANDALONE_COMPONENTS = [TestCardComponent, DayStepComponent, NumberStepperComponent];

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
