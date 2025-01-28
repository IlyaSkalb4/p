import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventMeet } from './models/event-meet';
import { AsyncPipe, CommonModule } from '@angular/common';
import { selectSelectedEvents } from './reducers/events.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mainNav : string = 'Міські події';
  moviesNav: string = 'Фільми';
  concertsNav: string = 'Концерти';
  performancesNav: string = 'Вистави';
  eventsNotSelected: string = 'Події не обрані';
  eventsSelected: string = 'Подій обрано';
  eventsListButton: string = 'Обрані події';
  selectedEventsCount$: Observable<number>;

  constructor(private store: Store<{ selectedEvents: EventMeet[] }>) {
    this.selectedEventsCount$ = this.store.select(selectSelectedEvents).pipe(
      map((events) => events.length)
    );
  }
}
