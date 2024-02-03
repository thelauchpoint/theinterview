import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule, BrowserModule, RouterModule ],
  declarations: [AppComponent, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
