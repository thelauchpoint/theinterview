import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BaseComponent } from '@theinterview/xplat/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'section-step',
  templateUrl: 'step.component.html',
  
  standalone:true,
  imports: [CommonModule],
  // import components and modules but also can also be used to reference standalone directives and pipes. In this way, standalone components can be written without the need to create an NgModule to manage template dependencies.
})
export class stepComponent extends BaseComponent {
  @Input() data:any
  constructor() {
    super();
  }
}
