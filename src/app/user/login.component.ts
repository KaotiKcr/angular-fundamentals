import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: '';
  password: '';
  mouseoverLogin: false;
  loginInvalid = false;
  constructor(private authService: AuthService, private router: Router) {}
  login(formValues) {
    this.authService.login(formValues.userName, formValues.password).subscribe(response => {
      if (!response) {
        this.loginInvalid = true;
      } else {
        // login success
        this.loginInvalid = false;
        this.router.navigate(['events']);
      }
    });
  }
  cancel() {
    this.router.navigate(['events']);
  }
}
