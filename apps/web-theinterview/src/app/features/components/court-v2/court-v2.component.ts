import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// // {title: ‘Day’,completed: false,disabled: false,number_val: 91}

export interface CardInputs {
  title: string;
  disabled: boolean;
  canProceed: boolean;
  number_val: number;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'court-v2',
  templateUrl: './court-v2.component.html',
  styleUrls: ['./court-v2.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CourtV2Component {}
/**
 * @how it works
 * 1.one card that is looped through for each item in the array, if no 'number_value' value is set, use the index +1 as the value printed on the card, and the amount to show on the screen
   if a 'number_value' value is set, then use that value as the amount to show on the screen and the value printed on the card. 
   if the data looks like this: Would be index position +1 : {title: ‘Day’,completed: false,disabled: false,number_val?: null} Would be 91: {title: ‘Day’,completed: false,disabled: false,number_val: 91}

 * 2.the starting position on the screen for the card is the current item, so if the current item is 5, then the card will start at 5 and show 5-36
   current item is found by mapping data to find the first item in the array that has a false canProceed so that the current item is the first day that is has not been completed(canProceed) 
   if there are days before current item that have been completed then you should be able to horizontal scroll to those days, you should be able to horizontal scroll through all of the cards 
   

 * 3. if the disabled value is set to true, then all cards would be disabled following the current item, if the disabled value is set to null, then all cards would be enabled following the current item

 * 4. use the canProceed boolean to show a dot on the card, if the canProceed is set to true, then show the dot, if it's set to false, then don't show the dot

 * if the canProceed is true and the card is clicked then they can proceed to the next step, if the canProceed is false and the card is clicked then they can't proceed to the next step

 * 5. emit the daySelected event when a card is clicked, if the card is disabled then emit the disabledChanged event

 * 6. the cards should have skeleton loading when the component is loading and when the data is loading
 
 * 
 * /

// how does it know what the current item should be?
// it should start on either the index of 0 or start on the day that is passed in

// do I need to map data so that if all other days in the array are completed then the current item is the first day that is not completed?
