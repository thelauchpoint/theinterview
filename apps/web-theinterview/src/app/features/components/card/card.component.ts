import { Component } from '@angular/core';
import { BaseComponent } from '@theinterview/xplat/core';

@Component({
  selector: 'theinterview-card',
  templateUrl: 'card.component.html',
  standalone: true,
})
export class TestCardComponent extends BaseComponent {
  constructor() {
    super();
  }
}
