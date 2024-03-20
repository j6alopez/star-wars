import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationsService } from '../../../validations/validations.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {

  private authService = inject(AuthService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);


  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(ValidationsService.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.controls['email'].value!;
    const password = this.loginForm.controls['password'].value!;

    this.authService.login(email, password).subscribe((loginSuccess) => {
      if (loginSuccess) {
        const url = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/home';
        this.router.navigateByUrl(url);
      }
      this.loginForm.setErrors({ 'customError': 'Invalid credentials' });
    });
  }

  getFieldError(field: string): string | null {
    const control = this.loginForm.get(field);
    if (!control) return null;

    const errors = control.errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Field is required';
        case 'minlength':
          return `Minimum ${errors['minlength'].requiredLength} characters`;
        case 'pattern':
          return 'Invalid email format';

      }
    }
    return null;
  }

  isLoginFailed(): string | null {
    return this.loginForm.getError('customError');
  }

}
