import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';



@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent implements OnInit {

  constructor( ) {

  }

}
