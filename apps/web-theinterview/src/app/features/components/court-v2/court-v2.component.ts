import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';

export interface CardInputs {
  title: string;
  disabled: boolean;
  canProceed: boolean;
  number_val?: number | null;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'court-v2',
  templateUrl: './court-v2.component.html',
  styleUrls: ['./court-v2.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CourtV2Component {
  @Input() data: Array<CardInputs> = [];
  skeleton: any[] = Array.from({ length: 10 });

  @Input() loading!: boolean;

  @ViewChild('cardContainer') cardContainer!: ElementRef; // for left and right scroll

  firstDisabledIndex: number | null = null;
  currentItem: any;
  @Output() daySelected: EventEmitter<any> = new EventEmitter();
  @Output() disabledChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private renderer: Renderer2) {}

  // oninit get current item
  ngOnInit() {
    console.log('data', this.data);

    // this.data.find((item) => console.log('item', item));

    // find the first item in the array that has a value of false for canProceed
    // current item should be the first item that you can see on the list.
    this.currentItem = this.data.find((item) => !item.canProceed);

    // find the first item in the array that is disabled and set all values after that to disabled on the html only

    console.log('currentItem', this.currentItem);

    if (this.currentItem) {
      // console.log('if current item then emit', this.currentItem);
      this.daySelected.emit(this.currentItem);
      if (this.currentItem.disabled !== null) {
        // if item in the list is disabled then all items after that should be disabled
        this.firstDisabledIndex = this.data.indexOf(this.currentItem);
        // console.log('if current item is disabled emit disabled', this.currentItem.disabled);
        this.disabledChanged.emit(this.currentItem.disabled);
      }
    }

    // Scroll to the current item
    // this.scrollToCurrentItem(currentItem);
  }

  ngAfterViewInit() {
    // Scroll to the current item
    this.scrollToCurrentItem(this.currentItem);
  }

  // Handle card click event
  onCardClick(item: any) {
    console.log('card clicked, item', item);
    if (item.disabled !== null) {
      console.log('card clicked and item is disabled', item.disabled);
      this.disabledChanged.emit(item.disabled);
    } else {
      console.log('card clicked and item is not disabled, emit item', item);
      this.daySelected.emit(item);
    }
  }

  private scrollToCurrentItem(currentItem: any) {
    console.log('get natvie element value', this.cardContainer.nativeElement);
    const dis = this.cardContainer.nativeElement;
    // console.log('card container', dis)
    const cardIndex = this.data.indexOf(currentItem);

    // Calculate the scroll position to place the current item at the beginning
    const cardWidth = dis.querySelector('.card')?.clientWidth || 0;
    const scrollPosition = cardIndex * cardWidth;

    // Set the scroll position
    dis.scrollLeft = scrollPosition;
  }
}

/**
 * @how it works
 * ✅ 1.one card that is looped through for each item in the array, if no 'number_value' value is set, use the index +1 as the value printed on the card, and the amount to show on the screen
   if a 'number_value' value is set, then use that value as the amount to show on the screen and the value printed on the card. 
   if the data looks like this: Would be index position +1 : {title: ‘Day’,completed: false,disabled: false,number_val?: null} Would be 91: {title: ‘Day’,completed: false,disabled: false,number_val: 91}

 * 2.the starting position on the screen for the card is the current item, so if the current item is 5, then the card will start at 5 and show 5-36
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
