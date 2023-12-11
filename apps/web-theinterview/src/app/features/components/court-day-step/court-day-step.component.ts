import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

// // {title: ‘Day’,completed: false,disabled: false,number_val: 91}

// export interface CardInputs {
//   title: string;
//   disabled: boolean;
//   canProceed: boolean;
//   days: number;
// }

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'court-day-step',
  templateUrl: './court-day-step.component.html',
  styleUrls: ['./court-day-step.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CourtDayStepComponent {
  // @Input() inputs: Array<CardInputs> = [];
  // days: number | undefined;
  // initialDays: number | undefined;
  // @Output() disabledChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  // @Output() daysSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  // need to get the logic when the page loads not when it's clicked and I think that I already have it on init so lets try to pass it in
  // ngOnInit() {
  //   // console.log('cardInputs', this.inputs);
  //   // this.inputs.forEach((cardInput: CardInputs) => {
  //     // Your logic here
  //     // this.daySelected(cardInput, this.inputs.indexOf(cardInput));
  //     // console.log('inside for each', cardInput, this.inputs.indexOf(cardInput));
  //   });
  }
  //   // logic for how many to show - if days = 36 then show 36, if days = null then use index + 1
  //   // if disabled is set to null then all would be enabled.
  //   // if disabled is set to true then all would be disabled.
    // daySelected(cardInputs: CardInputs, index: number) {
    //   // daySelected(cardInputs: CardInputs) {
    //   // would I just use the length here instead of the index?
    //   this.initialDays = this.inputs.length;
    //   if (cardInputs.days === null) {
    //     // return
    //     this.days = index + 1;
    //     console.log('if days null', this.days);
    //     return this.days;
    //   } else {
    //     // return
    //     this.days = cardInputs.days;
    //     console.log('if days are passed in', this.days);
    //     return this.days;
    //   }
    // }
  // selectDay(input: CardInputs) {
  //   if (input.disabled) {
  //     this.disabledChanged.emit(true);
  //   } else {
  //     this.daysSelected.emit(true);
  //   }
  // }
// }

// // todo:
// // inputs array object (1 item is 1 card) ✅
// // ouputs for which one is selected (day)
// // output for one selected if disabled
// // array length as default value for how many would go in ✅
// // default value for index +1, or if they input 36 then show 36 ✅
// // always a top bar - so horizontal scroll needed
// // if disable is set to null then all would be enabled.

// // todo: logic stuff
// // if days = 36 then show 36, if days = null then use index + 1

// /**
//  * @how it works
//  * 1.one card that is looped through for each item in the array, if no 'days' value is set, use the index +1 as the value for the card, and the amount to show on the screen
//  * 2.the starting position on the screen for the card is the current day, so if the current day is 5, then the card will start at 5 and show 5-36
//  *  if the data looks like this: Would be index position +1 : {title: ‘Day’,completed: false,disabled: false,number_val?: null}Would be 91: {title: ‘Day’,completed: false,disabled: false,number_val: 91}
//  * 3. if the disabled value is set to true, then all cards would be disabled following the current day, if the disabled value is set to null, then all cards would be enabled following the current day
//  * 4. use the canProceed boolean to show a dot on the card, if the canProceed is set to true, then show the dot, if it's set to false, then don't show the dot
//  * if the canProceed is true and the card is clicked then they can proceed to the next step, if the canProceed is false and the card is clicked then they can't proceed to the next step
//  * 5. emit the daySelected event when a card is clicked, if the card is disabled then emit the disabledChanged event
//  *
//  */
