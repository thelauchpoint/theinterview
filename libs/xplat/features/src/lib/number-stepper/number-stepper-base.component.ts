import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '@theinterview/xplat/core';

export interface CardInputs {
  title: string;
  disabled: boolean;
  canProceed: boolean;
  numberVal?: number | null;
}

@Directive({
  standalone: true,
})
export class NumberStepperBaseComponent extends BaseComponent implements OnInit {
  @Input() data: Array<CardInputs> = [];
  @Input() loading!: boolean;

  skeleton: any[] = Array.from({ length: 10 }); //for skeleton loading
  firstDisabledIndex: number | null = null; // for disabling cards in view only
  currentItem: any;

  @Output() daySelected: EventEmitter<any> = new EventEmitter();
  @Output() disabledChanged: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
    // find the first item in the array that has a value of false for canProceed, this is the current item.
    this.currentItem = this.data.find((item) => !item.canProceed);

    if (this.currentItem) {
      if (this.currentItem.disabled !== null) {
        // get the index of the first disabled index to use to disable by view all following cards
        this.firstDisabledIndex = this.data.indexOf(this.currentItem);
      }
    }
  }

  onCardClick(item: CardInputs) {
    if (!item.disabled) {
      this.daySelected.emit(item);
    }
  }
}
