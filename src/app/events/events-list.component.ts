import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService, private toastService: ToastrService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
  handleThumbnailClick(eventName) {
    this.toastService.success(eventName);
  }
}
