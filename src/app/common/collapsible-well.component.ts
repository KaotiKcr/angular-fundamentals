import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent {
  visible = true;

  toogleContent() {
      this.visible = !this.visible;
  }
}
