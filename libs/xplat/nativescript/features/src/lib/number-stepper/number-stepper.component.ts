import { CommonModule } from '@angular/common';
import { Component, ElementRef, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { EventData, Label, Page, StackLayout } from '@nativescript/core';
import { ScrollView } from '@nativescript/core/ui/scroll-view';
import { CardInputs, NumberStepperBaseComponent } from '@theinterview/xplat/features';

@Component({
  selector: 'number-stepper',
  templateUrl: './number-stepper.component.html',
  styleUrls: ['./number-stepper.component.scss'],
  standalone: true,
  imports: [NativeScriptCommonModule, CommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NumberStepperComponent extends NumberStepperBaseComponent {
  @ViewChild('scrollView', { static: false }) scrollViewRef!: ElementRef<ScrollView>;
  // @ViewChild('scrollView') scrollViewRef!: ElementRef; // for left and right scroll
  // @ViewChild('scrollView', { static: false }) scrollViewLayout!: ScrollView;
  // @ViewChild('cardContainer', { static: false }) cardContainer!: ElementRef;
  // page!: Page;
  scrollLayout!: ScrollView;
  // contentContainer!: StackLayout;
  // numLabels = 50;

  // ngAfterViewInit() {
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!NumberStepperComponent', this.data);
    // this.scrollToIndex(this.currentItem);
    // this.scrollToId(this.currentItem);
    // )
    //  this.scrollToCurrentItem(this.currentItem);
  // }

  bindScrollView() {
    this.scrollLayout = <ScrollView>this.scrollViewRef.nativeElement;
    console.log('bindScrollView', this.scrollLayout);
    if (this.currentItem) {
      console.log('CURRENTITEMS');
      this.scrollToCurrentItem(this.currentItem);
    }
  }

  scrollToCurrentItem(currentItem: CardInputs) {
    const cardIndex = this.data.indexOf(currentItem);
    console.log('cardIndex', cardIndex);

    // Assuming each item has a fixed width, you can adjust this value based on your layout
    const itemWidth = 70; // Adjust this value based on your layout

    const scrollPosition = cardIndex * itemWidth;

    console.log('scrollPosition', cardIndex, itemWidth, scrollPosition);
    console.log('VARIABLESET', this.scrollLayout);
    console.log('SCROLLABLEWIDTH', this.scrollLayout.scrollableWidth);
    console.log('SETOFFSET', this.scrollLayout.scrollToHorizontalOffset(200, false));

    setTimeout(() => {
      this.scrollLayout.scrollToHorizontalOffset(scrollPosition, false);
    } , 200);

    // this.scrollLayout.scrollToHorizontalOffset(scrollPosition, true);

    // this.cardContainer.scrollLeft = scrollPosition;
    // console.log('DOTHEMATHDOE', this.scrollLayout.scrollToHorizontalOffset(scrollPosition, false));
    // Set the scroll position
    // this.scrollViewRef.nativeElement.scrollToHorizontalOffset(scrollPosition, false);
  }
}

// make sure it's bound, print next item to console - background color or something

// private scrollToCurrentItem(currentItem: CardInputs) {
//   const cardContainer = this.cardContainer.nativeElement;

//   const cardIndex = this.data.indexOf(currentItem);

//   // Calculate the scroll position to make the current item the first visible item
//   const cardWidth = cardContainer.querySelector('.btn')?.clientWidth || 0;

//   const scrollPosition = cardIndex * cardWidth;

//   // Set the scroll position
//   cardContainer.scrollLeft = scrollPosition;
// }
//   scrollToIndex(args: EventData) {
//     this.page = <Page>args.object;
//     this.scrollLayout = this.page.getViewById('myScroller') as ScrollView;
//     this.contentContainer = this.page.getViewById('contentContainer') as StackLayout;

//     for (let i = 1; i <= this.numLabels; i++) {
//       let lbl = new Label();
//       lbl.id = 'lbl' + i;
//       lbl.text = 'Label ' + i;
//       this.contentContainer.addChild(lbl);
//     }

//   this.scrollViewRef.nativeElement.scrollToIn
// }

// scrollToId(args: CardInputs) {
//   const base = this.page.getViewById('lbl') as Label;
//   const cardIndex = this.data.indexOf(args);
//   let targt = this.page.getViewById('lbl' + cardIndex) as Label;
//   this.scrollLayout.scrollToHorizontalOffset(targt.getLocationRelativeTo(base).x, false);
// }
// }
