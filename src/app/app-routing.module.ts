import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver
} from './events/index';
import { Error404Component } from './errors/404.component';

const routes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
