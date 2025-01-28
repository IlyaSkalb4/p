import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventMeet } from '../../models/event-meet';
import { Observable } from 'rxjs';
import { removeEvent } from '../../actions/events.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-events',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './selected-events.component.html',
  styleUrl: './selected-events.component.css'
})
export class SelectedEventsComponent {
  title: string = 'Усі Події';
  buttonDetails: string = 'Детальніше';
  allRightsReserved: string = '© 2024 Міські Події. Усі права захищені.';
  selectedEvents$: Observable<EventMeet[]>;

  constructor(private store: Store<{ events: EventMeet[] }>) {
    this.selectedEvents$ = store.select((state) => state.events);
  }

  removeFromSelected(eventId: number): void {
    this.store.dispatch(removeEvent({ eventId }));
  }
}
