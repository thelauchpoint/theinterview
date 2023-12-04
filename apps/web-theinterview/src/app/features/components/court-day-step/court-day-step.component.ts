import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface CardInputs {
  title: string;
  disabled: boolean;
  canProceed: boolean;
  days: number;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'court-day-step',
  templateUrl: './court-day-step.component.html',
  styleUrls: ['./court-day-step.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CourtDayStepComponent {
  @Input() inputs: Array<CardInputs> = [];

  days: number | undefined;

  @Output() disabledChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() daysSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  // need to get the logic when the page loads not when it's clicked and I think that I already have it on init so lets try to pass it in

  ngOnInit() {
    console.log('cardInputs', this.inputs);
    this.inputs.forEach((cardInput: CardInputs) => {
      // Your logic here
      this.daySelected(cardInput);
      console.log('inside for each', cardInput)
    });
  }

  // logic for how many to show - if days = 36 then show 36, if days = null then use index + 1
  // if disabled is set to null then all would be enabled.
  // if disabled is set to true then all would be disabled.
  // daySelected(cardInputs: CardInputs, index: number) {
  daySelected(cardInputs: CardInputs) {
    // would I just use the length here instead of the index?
    const index = this.inputs.length;
    if (cardInputs.days === null) {
      // return
      this.days = index + 1;
      console.log('if days null', this.days);

      return this.days;
    } else {
      // return
      this.days = cardInputs.days;
      console.log('if days are passed in', this.days);
      return this.days;
    }
  }
}

// todo:
// inputs array object (1 item is 1 card) ✅
// ouputs for which one is selected (day) 
// output for one selected if disabled
// array length as default value for how many would go in ✅
// default value for index +1, or if they input 36 then show 36 ✅
// always a top bar - so horizontal scroll needed
// if disable is set to null then all would be enabled.

// todo: logic stuff
// if days = 36 then show 36, if days = null then use index + 1
