import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
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
}
