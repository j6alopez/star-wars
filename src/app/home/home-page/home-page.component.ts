import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationBarComponent } from '../../shared/components/navigation-bar/navigation-bar.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerComponent,
    NavigationBarComponent, 
    RouterModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
