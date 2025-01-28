import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EVENTS } from '../../models/mocks/mock-events';
import { EventMeet } from '../../models/event-meet';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-events-search',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './events-search.component.html',
  styleUrl: './events-search.component.css'
})
export class EventsSearchComponent {
  events: EventMeet[] = EVENTS[1];
  title: string = 'Усі Події';
  buttonDetails: string = 'Детальніше';
  buttonAddToSelected: string = 'Додати до обраних';
  allRightsReserved: string = '© 2024 Міські Події. Усі права захищені.';

  filteredEvents: EventMeet[] = this.events;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const category: string = params['category'];

      if (category) {
        this.filteredEvents = this.events.filter(
          (event) => event.categories[0] === category
        );

        this.title = category;
      } else {
        this.filteredEvents = this.events;
      }
    });
  }
}
