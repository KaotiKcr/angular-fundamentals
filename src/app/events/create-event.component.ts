import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';
import { IEvent } from './shared/event.model';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  newEvent: any;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) {}
  cancel() {
    this.router.navigate(['/events']);
  }
  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe((event: IEvent) => {
        console.log(event);
      this.isDirty = false;
      this.router.navigate(['/events/' + event.id]);
    });
  }
}
