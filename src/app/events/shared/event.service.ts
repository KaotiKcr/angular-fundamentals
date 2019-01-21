import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { IEvent, ISession } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}
  getEvents(): Observable<IEvent[]> {
    return this.http
      .get<IEvent[]>('/api/events');
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http
      .get<IEvent>('/api/events/' + id);
  }

  saveEvent(event) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http
      .post<IEvent>('/api/events', event, options);
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http
      .get<ISession[]>('/api/sessions/search?search=' + searchTerm);
  }
}
