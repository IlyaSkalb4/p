import { Component } from '@angular/core';
import { EVENTS } from '../../models/mocks/mock-events';
import { EventMeet } from '../../models/event-meet';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  latestEvents: EventMeet[] = EVENTS[0];
  title: string = 'Найновіші Події';
  buttonDetails: string = 'Детальніше';
  buttonAddToSelected: string = 'Додати до обраних';
  allRightsReserved: string = '© 2024 Міські Події. Усі права захищені.';
}
