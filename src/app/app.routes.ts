import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoreAboutEventComponent } from './components/more-about-event/more-about-event.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsSearchComponent } from './components/events-search/events-search.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Основна сторінка' },
    { path: 'moreAboutEvent/:id', component: MoreAboutEventComponent, title: 'Детальніше про подію' },
    { path: 'eventsSearch', component: EventsSearchComponent, title: 'Пошук подій' },
    { path: 'selectedEvents', component: EventsSearchComponent, title: 'Список обраних подій' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, title: 'Сторінку не знайдено' }
];
