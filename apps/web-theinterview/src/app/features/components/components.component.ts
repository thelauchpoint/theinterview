import { Component } from '@angular/core';
import { BaseComponent } from '@theinterview/xplat/core';
import { CardInputs } from './court-day-step/court-day-step.component';

@Component({
  selector: 'theinterview-components',
  templateUrl: 'components.component.html',
})
export class ComponentsComponent extends BaseComponent {
  inputs: Array<CardInputs> = [];

  constructor() {
    super();
    this.inputs = [
      {
        title: 'courtney',
        disabled: false,
        canProceed: true,
        days: 36,
      },
    ];
  }
}
