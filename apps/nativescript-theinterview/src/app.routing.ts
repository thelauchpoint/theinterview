// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular';

// app
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'feature',
    loadChildren: () => import('./features/my-feature/my-feature.module').then((m) => m.FeatureModule),
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
