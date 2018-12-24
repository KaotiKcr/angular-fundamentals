import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-navbar></app-navbar><app-events-list></app-events-list><router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'kaotik-angular-fundamentals';
}
