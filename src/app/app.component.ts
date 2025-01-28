import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventMeet } from './models/event-meet';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AsyncPipe
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
  eventsListButton: string = 'Обрані події';
  selectedEventsCount$: Observable<number>;

  constructor(private store: Store<{ events: EventMeet[] }>) {
    this.selectedEventsCount$ = store.select((state) => state.events.length);
  }
}
