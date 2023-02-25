import { APP_INITIALIZER, NgModule } from '@angular/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { of } from 'rxjs';

function appInitializer() {
  return of(true);
}

@NgModule({
  declarations: [AppComponent],
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
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 50, logOnly: true })
      : [],
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializer,
    //   multi: true,
    //   // deps: [Store],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
