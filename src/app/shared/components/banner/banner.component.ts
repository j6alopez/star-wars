import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-banner',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
}
