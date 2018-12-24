import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {
  @Input() event: any;

  constructor() { }

  ngOnInit() {
  }

}
