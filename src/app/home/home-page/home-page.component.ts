import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { NavigationBarComponent } from '../../shared/components/navigation-bar/navigation-bar.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { AuthService } from '../../auth/services/auth.service';
import { AuthProfileComponent } from '../../auth/components/auth-profile/auth-profile.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    AuthProfileComponent,
    BannerComponent,
    NavigationBarComponent, 
    RouterModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
}
