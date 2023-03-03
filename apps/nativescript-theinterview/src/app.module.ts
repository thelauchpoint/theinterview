// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { environment } from './environments/environment.prod';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
