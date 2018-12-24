import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ToastrService } from './common/toastr.service';
import { AppComponent } from './app.component';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver
} from './events/index';

import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
}
