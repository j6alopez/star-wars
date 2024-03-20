import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationsService } from '../../../validations/validations.service';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public registerForm = new FormGroup({
    email: new FormControl('aaa@gmail.com', [Validators.required, Validators.pattern(ValidationsService.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  public feedbackMessage?: string | null;

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const email = this.registerForm.controls['email'].value!;
    const password = this.registerForm.controls['password'].value!;

    this.authService.createUser(email, password)
      .subscribe((isCreated) => {
        if (isCreated) {
          this.router.navigate(['./auth', '/login']);
          return;
        }
        this.registerForm.setErrors({ 'customError': 'User already registered' });

      });
  }

  getFieldError(field: string): string | null {
    const control = this.registerForm.get(field);
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

  isUserAlreadyRegistered() : string | null {
    return this.registerForm.getError('customError');
  }

}
