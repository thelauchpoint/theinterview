import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'theinterview-day-step',
  templateUrl: './day-step.component.html',
  styleUrls: ['./day-step.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DayStepComponent {
  @Input() public intervals: string[] = ['1', '2', '3', '4'];

  @Output() intervalSelected: EventEmitter<{ index: number; interval_id: string }> = new EventEmitter<{ index: number; interval_id: string }>();

  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  // }

  daySelected(index: number) {
    console.log('daySelected', index);
  }
}
