import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

export interface CardInputs {
  title: string;
  disabled: boolean;
  canProceed: boolean;
  numberVal?: number | null;
}

//todo:?? to configure the classes of the cards
export interface CardConfigs {
  classes: {
    active: string;
    disabled: string;
    current: string;
    text: string;
  };
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'court-v2',
  templateUrl: './court-v2.component.html',
  styleUrls: ['./court-v2.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CourtV2Component implements OnInit, AfterViewInit {
  // button color, button text, disabled

  @ViewChild('cardContainer') cardContainer!: ElementRef; // for left and right scroll

  @Input() data: Array<CardInputs> = [];
  @Input() loading!: boolean;

  skeleton: any[] = Array.from({ length: 10 }); //for skeleton loading
  firstDisabledIndex: number | null = null; // for disabling cards in view only
  currentItem: any;

  @Output() daySelected: EventEmitter<any> = new EventEmitter();
  @Output() disabledChanged: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
    // find the first item in the array that has a value of false for canProceed, this is the current item.
    // todo:?? and not disabled if they don't want to show disabled cards
    this.currentItem = this.data.find((item) => !item.canProceed);

    if (this.currentItem) {
      if (this.currentItem.disabled !== null) {
        // get the index of the first disabled index to use to disable by view all following cards
        this.firstDisabledIndex = this.data.indexOf(this.currentItem);
      }
    }
  }

  //  todo:?? set if's for the classes of the cards here based on config values
  // setCardClasses(card: CardInputs, index: number) {
  //   const config: CardConfigs = {
  //     active: 'btn-primary',
  //     disabled: 'btn-secondary',
  //     current: 'btn-primary',
  //     text: 'text-white',
  //   };

  ngAfterViewInit() {
    // Scroll to the current item
    this.scrollToCurrentItem(this.currentItem);
  }

  // Handle card click event
  onCardClick(item: CardInputs) {
    // todo:?? do we want to emit if it's disabled? or just not emit anything?
    // if item clicked is disabled then emit disabledChanged event
    // if (item.disabled === true) {
    //   console.log('card clicked and item is disabled', item.disabled);
    //   this.disabledChanged.emit(item.disabled);
    // } else
    if (!item.disabled) {
      // console.log('card clicked and item is not disabled, emit item', item);
      this.daySelected.emit(item);
    }
  }

  // this works great if the list is long enough, if there aren't items after current item than it doesn't work
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
// ok so the actual issue is that the items list is too short to appropriately scroll the the current item. what should happen instead is that the current item is always the first item in the list even if there are no items showing after it.

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
