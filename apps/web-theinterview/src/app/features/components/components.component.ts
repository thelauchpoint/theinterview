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
      {
        title: 'asdf',
        disabled: false,
        canProceed: true,
        days: 6,
      },
      {
        title: 'courtnesdghjy',
        disabled: false,
        canProceed: true,
        days: 16,
      },
      {
        title: 'couhdgjtyjtyrtney',
        disabled: false,
        canProceed: true,
        days: 8,
      },
      {
        title: 'courfghsfgtney',
        disabled: false,
        canProceed: true,
        days: 4,
      },
      {
        title: 'cour2355tney',
        disabled: true,
        canProceed: true,
        days: 0,
      },
    ];
  }
}
