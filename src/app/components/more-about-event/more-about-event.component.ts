import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EVENTS } from '../../models/mocks/mock-events';
import { EventMeet } from '../../models/event-meet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-more-about-event',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './more-about-event.component.html',
  styleUrl: './more-about-event.component.css'
})
export class MoreAboutEventComponent {
  event!: EventMeet;
  backToAllEvents: string = 'Повернутись до усіх подій';
  title: string = 'Подія';
  buttonAddToSelected: string = 'Додати до обраних';
  allRightsReserved: string = '© 2024 Міські Події. Усі права захищені.';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const eventId: number = +this.route.snapshot.paramMap.get('id')!;
    this.event = EVENTS[1].find((e) => e.id === eventId)!;
    this.title = this.event.categories[0];

    if (!this.event) {
      console.error('Event not found!');
    }
  }
}
