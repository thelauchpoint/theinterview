import { CommonModule } from '@angular/common';
import { Component, ElementRef, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Page, StackLayout } from '@nativescript/core';
import { ScrollView } from '@nativescript/core/ui/scroll-view';
import { NumberStepperBaseComponent } from '@theinterview/xplat/features';

@Component({
  selector: 'number-stepper',
  templateUrl: './number-stepper.component.html',
  styleUrls: ['./number-stepper.component.scss'],
  standalone: true,
  imports: [NativeScriptCommonModule, CommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NumberStepperComponent extends NumberStepperBaseComponent {
  // @ViewChild('scrollView', { static: false }) scrollViewRef!: ElementRef<ScrollView>;
  @ViewChild('scrollView', { static: false }) scrollView!: ScrollView;
  @ViewChild('cardContainer', { static: false }) cardContainer!: ElementRef;
  page!: Page;
  scrollLayout!: ScrollView;
  contentContainer!: StackLayout;
  numLabels = 50;

  ngAfterViewInit() {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!NumberStepperComponent', this.data);
    // this.scrollToCurrentItem(this.currentItem);
    // this.scrollToIndex(this.currentItem);
    // this.scrollToId(this.currentItem);
  }

  // scrollToCurrentItem(currentItem: CardInputs) {
  //   const cardIndex = this.data.indexOf(currentItem);
  //   console.log('cardIndex', cardIndex);

  //   // Assuming each item has a fixed width, you can adjust this value based on your layout
  //   const itemWidth = 150; // Adjust this value based on your layout

  //   const scrollPosition = cardIndex * itemWidth;

  //   console.log('scrollPosition', cardIndex, itemWidth, scrollPosition);

  //   // this.cardContainer.nativeElement.scrollToHorizontalOffset(scrollPosition, false);
  //   // this.cardContainer.scrollLeft = scrollPosition;
  //   // console.log('DOTHEMATHDOE', this.scrollView.scrollToHorizontalOffset(scrollPosition, false));
  //   // Set the scroll position
  //   // this.scrollViewRef.nativeElement.scrollToHorizontalOffset(scrollPosition, false);
  // }

  // scrollToIndex(args: EventData) {
  //   this.page = <Page>args.object;
  //   this.scrollLayout = this.page.getViewById('myScroller') as ScrollView;
  //   this.contentContainer = this.page.getViewById('contentContainer') as StackLayout;

  //   for (let i = 1; i <= this.numLabels; i++) {
  //     let lbl = new Label();
  //     lbl.id = 'lbl' + i;
  //     lbl.text = 'Label ' + i;
  //     this.contentContainer.addChild(lbl);
  //   }

  // this.scrollViewRef.nativeElement.scrollToIn
}

// scrollToId(args: CardInputs) {
//   const base = this.page.getViewById('lbl') as Label;
//   const cardIndex = this.data.indexOf(args);
//   let targt = this.page.getViewById('lbl' + cardIndex) as Label;
//   this.scrollLayout.scrollToHorizontalOffset(targt.getLocationRelativeTo(base).x, false);
// }
// }
