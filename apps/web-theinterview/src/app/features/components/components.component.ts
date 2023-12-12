import { Component } from '@angular/core';
import { BaseComponent } from '@theinterview/xplat/core';
import { CardInputs } from './court-v2/court-v2.component';

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
        number_val: 36,
      },
      {
        title: 'asdf',
        disabled: false,
        canProceed: true,
        number_val: null,
      },
      {
        title: 'courtnesdghjy',
        disabled: false,
        canProceed: true,
        number_val: 16,
      },
      {
        title: 'couhdgjtyjtyrtney',
        disabled: true,
        canProceed: false,
        number_val: 8,
      },
      {
        title: 'courfghsfgtney',
        disabled: false,
        canProceed: true,
        number_val: 4,
      },
      {
        title: 'cour2355tney',
        disabled: true,
        canProceed: true,
        number_val: 0,
      },
      {
        title: 'courtnesdghjy',
        disabled: false,
        canProceed: true,
        number_val: 16,
      },
      {
        title: 'couhdgjtyjtyrtney',
        disabled: true,
        canProceed: false,
        number_val: 8,
      },
      {
        title: 'courfghsfgtney',
        disabled: false,
        canProceed: true,
        number_val: 4,
      },
      {
        title: 'cour2355tney',
        disabled: true,
        canProceed: true,
        number_val: 0,
      },
      {
        title: 'courtnesdghjy',
        disabled: false,
        canProceed: true,
        number_val: 16,
      },
      {
        title: 'couhdgjtyjtyrtney',
        disabled: true,
        canProceed: false,
        number_val: 8,
      },
      {
        title: 'courfghsfgtney',
        disabled: false,
        canProceed: true,
        number_val: 4,
      },
      {
        title: 'cour2355tney',
        disabled: true,
        canProceed: true,
        number_val: 0,
      },
      {
        title: 'courtnesdghjy',
        disabled: false,
        canProceed: true,
        number_val: 16,
      },
      {
        title: 'couhdgjtyjtyrtney',
        disabled: true,
        canProceed: false,
        number_val: 8,
      },
      {
        title: 'courfghsfgtney',
        disabled: false,
        canProceed: true,
        number_val: 4,
      },
      {
        title: 'cour2355tney',
        disabled: true,
        canProceed: true,
        number_val: 0,
      },
    ];
  }

  handleDaySelected(selectedDay: any) {
    console.log('Day selected:', selectedDay);
    // Add your logic for handling the selected day
  }

  handleDisabledChanged(isDisabled: boolean) {
    // console.log('Disabled changed:', isDisabled);
    // Add your logic for handling the disabled state change
  }
}




