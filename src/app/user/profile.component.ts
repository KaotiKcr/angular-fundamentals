import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  constructor(private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toast: Toastr) {}
  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*')
    ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
  cancel() {
    this.router.navigate(['events']);
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.UpdateCurrentUser(formValues.firstName, formValues.lastName);
      this.toast.success('Profile saved!');
    }
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
}
