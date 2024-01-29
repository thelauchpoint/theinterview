import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppBaseComponent, sectionTestimonialComponent } from '@theinterview/xplat/web/features';
import { LANDING_CONTENT_CONFIG } from './core/config/content.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'theinterview-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [sectionTestimonialComponent, CommonModule],
})
export class AppComponent extends AppBaseComponent {
  title = 'asp-landing';
  full_content = LANDING_CONTENT_CONFIG;
}
