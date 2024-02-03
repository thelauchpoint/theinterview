import { Component } from '@angular/core';
import { LANDING_CONTENT_CONFIG } from '../../../core/config/content.config';

@Component({
  selector: 'theinterview-accuservpro-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  full_content = LANDING_CONTENT_CONFIG;

}
