import { CommonModule } from '@angular/common';
import { Component, ElementRef, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
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

  scrollLayout!: ScrollView;

  bindScrollView() {
    this.scrollLayout = <ScrollView>this.scrollViewRef.nativeElement;

    if (this.currentItem) {
      this.scrollToCurrentItem(this.currentItem);
    }
  }

  scrollToCurrentItem(currentItem: CardInputs) {
    const cardIndex = this.data.indexOf(currentItem);

    // Assuming each item has a fixed width
    const itemWidth = 75;

    const scrollPosition = cardIndex * itemWidth;

    setTimeout(() => {
      this.scrollLayout.scrollToHorizontalOffset(scrollPosition, false);
    }, 200);
  }
}
