import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardInputs, NumberStepperBaseComponent } from '@theinterview/xplat/features';

@Component({
  selector: 'number-stepper',
  templateUrl: './number-stepper.component.html',
  styleUrls: ['./number-stepper.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class NumberStepperComponent extends NumberStepperBaseComponent implements OnInit, AfterViewInit {
  @ViewChild('cardContainer') cardContainer!: ElementRef; // for left and right scroll

  ngAfterViewInit() {
    this.scrollToCurrentItem(this.currentItem);
  }

  private scrollToCurrentItem(currentItem: CardInputs) {
    const cardContainer = this.cardContainer.nativeElement;

    const cardIndex = this.data.indexOf(currentItem);

    // Calculate the scroll position to make the current item the first visible item
    const cardWidth = cardContainer.querySelector('.btn')?.clientWidth || 0;

    const scrollPosition = cardIndex * cardWidth;

    // Set the scroll position
    cardContainer.scrollLeft = scrollPosition;
  }
}

/**
 * @how it works
 * ✅ 1.one card that is looped through for each item in the array, if no 'number_value' value is set, use the index +1 as the value printed on the card, and the amount to show on the screen
   if a 'number_value' value is set, then use that value as the amount to show on the screen and the value printed on the card. 
   if the data looks like this: Would be index position +1 : {title: ‘Day’,completed: false,disabled: false,number_val?: null} Would be 91: {title: ‘Day’,completed: false,disabled: false,number_val: 91}

 * ✅ 2.the starting position on the screen for the card is the current item, so if the current item is 5, then the card will start at 5 and show 5-36
   current item is found by mapping data to find the first item in the array that has a false canProceed so that the current item is the first day that is has not been completed(canProceed) 
   if there are days before current item that have been completed then you should be able to horizontal scroll to those days, you should be able to horizontal scroll through all of the cards 
   

 * 3. ✅ if the disabled value is set to true, then all cards would be disabled following the current item, if the disabled value is set to null, then all cards would be enabled following the current item

 * 4. ✅ use the canProceed boolean to show a dot on the card, if the canProceed is set to true, then show the dot, if it's set to false, then don't show the dot
      - should maintain styling so if the dot isn't there then the card should be the same size as the other cards

 * ✅ if the canProceed is true and the card is clicked then they can proceed to the next step, if the canProceed is false and the card is clicked then they can't proceed to the next step

 * 5. emit the daySelected event when a card is clicked, if the card is disabled then emit the disabledChanged event

 * 6. ✅ the cards should have skeleton loading when the component is loading and when the data is loading
 
 * 
 */
