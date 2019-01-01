import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;
    login(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: 'KaotiK',
            firstName: 'Ivan',
            lastName: 'Castillo'
        };
    }
    isAuthenticated () {
        return !!this.currentUser;
    }

    UpdateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
