import { Component, Input, NgModule } from '@angular/core';
import { ISession } from '../events';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-found-sessions',
  templateUrl: './found-sessions.component.html'
})
export class FoundSessionsComponent {
  @Input() foundSessions: ISession[];

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() { this.activeModal.close('Body click'); }
}
