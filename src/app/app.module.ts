import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
