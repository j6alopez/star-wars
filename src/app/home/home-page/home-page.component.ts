import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { NavigationBarComponent } from '../../shared/components/navigation-bar/navigation-bar.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { AuthService } from '../../auth/services/auth.service';

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
  
  private authService = inject(AuthService);
  private router = inject(Router);

  get userEmail(): string | undefined {
    return this.authService.currentUser?.email;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}
