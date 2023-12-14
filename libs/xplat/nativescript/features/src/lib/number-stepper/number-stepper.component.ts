import { CommonModule } from '@angular/common';
import { Component, ElementRef, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ScrollView } from '@nativescript/core/ui/scroll-view';
// import { ScrollView } from '@nativescript/core';
import { CardInputs, NumberStepperBaseComponent } from '@theinterview/xplat/features';
import { RadListViewComponent } from 'nativescript-ui-listview/angular';
@Component({
  selector: 'number-stepper',
  templateUrl: './number-stepper.component.html',
  styleUrls: ['./number-stepper.component.scss'],
  standalone: true,
  imports: [NativeScriptCommonModule, CommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NumberStepperComponent extends NumberStepperBaseComponent {
  // @ViewChild('cardContainer') cardContainer!: ElementRef; // for left and right scroll
  // @ViewChild('scrollView', { static: false }) scrollView!: ScrollView;
  @ViewChild('scrollView', { static: false }) scrollViewRef!: ElementRef<ScrollView>;

  // @ViewChild('somerandomstuff', { static: false }) somerandomstuff!: RadListViewComponent;

  //  todo:?? set if's for the classes of the cards here based on config values
  // setCardClasses(card: CardInputs, index: number) {
  //   const config: CardConfigs = {
  //     active: 'btn-primary',
  //     disabled: 'btn-secondary',
  //     current: 'btn-primary',
  //     text: 'text-white',
  //   };
  // constructor(private scrollViewRef: ElementRef) {
  //   super();
  // }
  ngAfterViewInit() {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!NumberStepperComponent', this.data);
    this.scrollToCurrentItem(this.currentItem);
  }

  scrollToCurrentItem(currentItem: CardInputs) {
    const cardIndex = this.data.indexOf(currentItem);
    console.log('cardIndex', cardIndex);

    // console.log('scrollToCurrentItem index number', cardIndex);
    // // Set the scroll position
    // this.listView.nativeElement.scrollToIndex(cardIndex);
    // this.listView.nativeElement.scrollToIndexAnimated(cardIndex);
    // Set the scroll position
    // this.somerandomstuff.listView.scrollToIndex(cardIndex);

    // Set the scroll position
    // this.somerandomstuff.listView.scrollToIndex(cardIndex);
    // this.cardContainer.nativeElement.scrollToIndex(cardIndex);

    // Assuming each item has a fixed width, you can adjust this value based on your layout
    const itemWidth = 150; // Adjust this value based on your layout

    const scrollPosition = cardIndex * itemWidth;

    console.log('scrollPosition', cardIndex, itemWidth, scrollPosition);

    // Set the scroll position
    this.scrollViewRef.nativeElement.scrollToHorizontalOffset(scrollPosition, false);
  }

  // create a method that will scroll to the this.currentItem when the component is loaded, this needs to work on nativescript
  // scrollToCurrentItem(currentItem: CardInputs) {
  //   console.log('scrollToCurrentItem', currentItem);
  //   // const cardContainer = this.cardContainer.nativeElement;
  //   const cardIndex = this.data.indexOf(currentItem);
  //   console.log('cardIndex', cardIndex);
  //   // Calculate the scroll position to make the current item the first visible item
  //   // const cardWidth = cardContainer.querySelector('.btn')?.clientWidth || 0;
  //   const cardContainer = page.getViewById('cardContainer'); // Assuming 'cardContainer' is the id of your card container
  //   const btn = cardContainer.getViewById('btn'); // Assuming 'btn' is the id of your button

  //   const cardWidth = btn ? btn.getActualSize().width : 0;

  //   console.log('cardWidth', cardWidth);
  //   const scrollPosition = cardIndex * cardWidth;
  //   console.log('scrollPosition', scrollPosition);
  //   // Set the scroll position
  //   cardContainer.scrollLeft = scrollPosition;
  // }
}
