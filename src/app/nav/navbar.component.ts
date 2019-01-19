import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events';
import { EventService } from './../events/shared/event.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFoundSessionsComponent } from './modal-found-sessions.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: '';
  foundSessions: ISession[];

  constructor(
    public auth: AuthService,
    private eventService: EventService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}
  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      const modalRef = this.modalService.open(ModalFoundSessionsComponent, { centered: true });

      // state of the foundSessions modal
      modalRef.componentInstance.foundSessions = sessions;
    });
  }
}
