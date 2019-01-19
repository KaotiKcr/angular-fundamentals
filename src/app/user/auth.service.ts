import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  login(userName: string, password: string) {
    const loginInfo = {
      username: userName,
      password: password
    };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(
        tap(data => {
          this.currentUser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError(err => {
          return of(false);
        })
      );
  }
  logout() {
    this.currentUser = undefined;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/logout', {}, options);
  }
  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http
      .get('/api/currentIdentity')
      .pipe(
        tap(data => {
          if (!!data) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
    console.log('isAuthenticated  ' + this.isAuthenticated() + '  checkAuthenticationStatus');
  }

  UpdateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }
}
