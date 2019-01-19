import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  EventRouteActivator,
  EventsListResolver,
  SessionListComponent,
  DurationPipe
} from './events/index';

import {
  TOASTR_TOKEN,
  // JQ_TOKEN,
  CollapsibleWellComponent,
  Toastr,
  ModalComponent
} from './common/index';

import { NavbarComponent } from './nav/navbar.component';
import { FoundSessionsComponent } from './nav/found-sessions.component';
import { ModalFoundSessionsComponent } from './nav/modal-found-sessions.component';

import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


const toastr: Toastr = window['toastr'];
// const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],

  declarations: [
    AppComponent,
    NavbarComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    ModalComponent,
    FoundSessionsComponent,
    ModalFoundSessionsComponent

  ],

  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    // { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    NgbActiveModal
  ],

  bootstrap: [AppComponent],

  entryComponents: [ModalFoundSessionsComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
}
