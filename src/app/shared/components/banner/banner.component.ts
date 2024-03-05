import { Component, Input } from '@angular/core';
import { AuthProfileComponent } from '../../../auth/components/auth-profile/auth-profile.component';

@Component({
  selector: 'shared-banner',
  standalone: true,
  imports: [ AuthProfileComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
}
