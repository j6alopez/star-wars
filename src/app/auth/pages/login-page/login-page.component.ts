import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationsService } from '../../../validations/validations.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [ ReactiveFormsModule ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {

    private authService = inject(AuthService);
    private router = inject(Router);

    public loginForm = new FormGroup({
        email: new FormControl('a@gmail.ccoaam', [ /*Validators.pattern(ValidationsService.emailPattern)*/]),
        password: new FormControl('dfjljsdfjk', [ Validators.minLength(8)]),
    });

    onSubmit() {
        console.log('dentro');
        if( this.loginForm.invalid) return;
        
        console.log('despur');
        const email = this.loginForm.controls['email'].value!;
        const password = this.loginForm.controls['password'].value!;
        this.authService.login(email, password).subscribe((loginSuccess) => {
            console.log(loginSuccess)
            if ( loginSuccess) {
                this.router.navigate(['./home']);
            }
        });
    }
}
