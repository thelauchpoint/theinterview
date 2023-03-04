import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'label-key-card',
  templateUrl: './label-key-card.component.html',
  styleUrls: ['./label-key-card.component.scss'],
})
export class LabelKeyCardComponent {
  @Input() information: any; //UPDATE THIS any type
  @Output() selectedCard: EventEmitter<unknown> = new EventEmitter(); //UPDATE THIS unknown type

  notifyParent(test: any) { // UPDATE THIS any type // update the name test to something better
    this.selectedCard.emit(test);
  }
}
