import { Component } from '@angular/core';
import { AppService } from '@theinterview/xplat/nativescript/core';
import { AppBaseComponent } from '@theinterview/xplat/nativescript/features';

@Component({
  selector: 'theinterview-root',
  templateUrl: 'app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
