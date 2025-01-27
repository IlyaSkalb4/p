import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  title: string = 'Найновіші Події';
  buttonDetails: string = 'Детальніше';
  buttonAddToSelected: string = 'Додати до обраних';
  allRightsReserved: string = '© 2024 Міські Події. Усі права захищені.';
}
