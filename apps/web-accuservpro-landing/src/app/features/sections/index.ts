import { moreComponent } from './more/more.component';
import { accuserviceComponent } from './accuservice/accuservice.component';
import { cutToChaseComponent } from './cut-to-chase/cut-to-chase.component';
import { sectionHeroComponent } from './hero/section-hero.component';
import { preLaunchSlotsComponent } from './prelaunch-slots/prelaunch-slots.component';
import { quote01Component } from './quote-01/quote-01.component';
import { stepComponent } from './step/step.component';

export const LANDING_SECTION_COMPONENTS = [
  quote01Component,
  sectionHeroComponent,
  preLaunchSlotsComponent,
  cutToChaseComponent,
  accuserviceComponent,
  stepComponent,
  moreComponent,
];
export * from './hero/section-hero.component';
export * from './prelaunch-slots/prelaunch-slots.component';
export * from './quote-01/quote-01.component';
export * from './cut-to-chase/cut-to-chase.component';
export * from './accuservice/accuservice.component';
export * from './step/step.component';
export * from './more/more.component';
