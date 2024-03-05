import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationsService } from '../../../validations/validations.service';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-sign-up-page',
    standalone: true,
    imports: [ 
		ReactiveFormsModule, 
		RouterModule
	],
    templateUrl: './sign-up-page.component.html',
    styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {
    private authService = inject(AuthService);
    private router = inject(Router);

    public registerForm = new FormGroup({
        email: new FormControl('aaa@gmail.com', [Validators.pattern(ValidationsService.emailPattern)]),
        password: new FormControl('aaa@gmail.com', [Validators.minLength(8)]),
    });

    onSubmit() {
        if (this.registerForm.invalid) {
            return;
        }
        const email = this.registerForm.controls['email'].value!;
        const password = this.registerForm.controls['password'].value!;
        this.authService.createUser(email, password)
			.subscribe(( isCreated) => {
            	if (isCreated) {
                	this.router.navigate(['./auth', '/login']);
                	return;
            	}
            this.registerForm.setErrors({ 'customError': 'fsldfjlksdjflskdjf' });

        });
    }
}
