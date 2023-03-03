// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [SharedModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
