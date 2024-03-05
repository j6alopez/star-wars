import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'auth-profile',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './auth-profile.component.html',
  styleUrl: './auth-profile.component.scss'
})
export class AuthProfileComponent {
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
