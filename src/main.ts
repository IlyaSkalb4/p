import { provideStore, select } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { selectedEventsReducer } from './app/reducers/events.reducer';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ selectedEvents: selectedEventsReducer }),
  ],
});
