import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  constructor(
    private auth: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toast: Toastr
  ) {}
  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*')
    ]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
  cancel() {
    this.router.navigate(['events']);
  }
  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.UpdateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
        this.toast.success('Profile saved!');
      });
    }
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
}
