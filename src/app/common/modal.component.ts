import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {
  @Input() title: string;
  constructor(public activeModal: NgbActiveModal) {}

  closeModal() { this.activeModal.close( 'Event close' ); }
}
