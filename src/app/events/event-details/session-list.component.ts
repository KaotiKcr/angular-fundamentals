import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  visibleSessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortbyNameAsc)
        : this.visibleSessions.sort(sortbyVotesDes);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
    }
  }
}

function sortbyNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name) { return 0; } else { return -1; }
}
function sortbyVotesDes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
