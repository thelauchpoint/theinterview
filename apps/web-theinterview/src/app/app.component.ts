import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@theinterview/xplat/web/features';

@Component({
  selector: 'theinterview-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
