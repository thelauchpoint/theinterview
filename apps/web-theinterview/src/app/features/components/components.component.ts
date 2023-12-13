import { Component } from '@angular/core';
import { BaseComponent } from '@theinterview/xplat/core';
import { CardInputs } from '@theinterview/xplat/features';

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
        title: 'Day',
        disabled: false,
        canProceed: true,
        numberVal: 36,
      },
      {
        title: 'Day',
        disabled: false,
        canProceed: true,
        numberVal: null,
      },
      {
        title: 'Day',
        disabled: false,
        canProceed: true,
        numberVal: 16,
      },
      {
        title: 'Day',
        disabled: false,
        canProceed: false,
        numberVal: 8,
      },
      {
        title: 'Day',
        disabled: false,
        canProceed: true,
        numberVal: 4,
      },
      // {
      //   title: 'Day',
      //   disabled: true,
      //   canProceed: true,
      //   numberVal: 0,
      // },
      // {
      //   title: 'Day',
      //   disabled: false,
      //   canProceed: true,
      //   numberVal: 16,
      // },
      // {
      //   title: 'Day',
      //   disabled: true,
      //   canProceed: false,
      //   numberVal: 8,
      // },
      // {
      //   title: 'Day',
      //   disabled: false,
      //   canProceed: true,
      //   numberVal: 4,
      // },
      // {
      //   title: 'Day',
      //   disabled: true,
      //   canProceed: true,
      //   numberVal: 0,
      // },
      // {
      //   title: 'Day',
      //   disabled: false,
      //   canProceed: true,
      //   numberVal: 16,
      // },
      // {
      //   title: 'Day',
      //   disabled: true,
      //   canProceed: false,
      //   numberVal: 8,
      // },
      // {
      //   title: 'Day',
      //   disabled: false,
      //   canProceed: true,
      //   numberVal: 4,
      // },
      // {
      //   title: 'Day',
      //   disabled: true,
      //   canProceed: true,
      //   numberVal: 0,
      // },
      // {
      //   title: 'Day',
      //   disabled: false,
      //   canProceed: true,
      //   numberVal: 16,
      // },
      // {
      //   title: 'Day',
      //   disabled: true,
      //   canProceed: false,
      //   numberVal: 8,
      // },
      // {
      //   title: 'Day',
      //   disabled: false,
      //   canProceed: true,
      //   numberVal: 4,
      // },
      // {
      //   title: 'Day',
      //   disabled: true,
      //   canProceed: true,
      //   numberVal: 0,
      // },
    ];
  }

  handleDaySelected(selectedDay: any) {
    console.log('Day selected:', selectedDay);
    // Add your logic for handling the selected day
  }

  handleDisabledChanged(isDisabled: boolean) {
    console.log('Disabled changed:', isDisabled);
    // Add your logic for handling the disabled state change
  }
}
