import { LANDING_CONTENT_CONFIG } from './core/config/content.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'asp-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [sectionTestimonialComponent, CommonModule, home],
})
export class LayoutComponent {
  title = 'asp-landing';
  full_content = LANDING_CONTENT_CONFIG;
}
