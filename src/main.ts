import { provideStore } from '@ngrx/store';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { eventsReducer } from './app/reducers/events.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ selectedEvents: eventsReducer }),
  ],
});
