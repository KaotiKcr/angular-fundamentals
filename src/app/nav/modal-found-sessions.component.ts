import { Component, Input } from '@angular/core';
import { ISession } from '../events';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-found-sessions',
  templateUrl: './modal-found-sessions.component.html'
})
export class ModalFoundSessionsComponent {
  @Input() foundSessions: ISession[];

  constructor() {}

  closeModal() {
      // this.activeModal.close('closeModal Body');
    }
}
