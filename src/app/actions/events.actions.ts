import { createAction, props } from '@ngrx/store';
import { EventMeet } from '../models/event-meet';

export const addEvent = createAction(
  '[Events] Add Event',
  props<{ event: EventMeet }>()
);

export const removeEvent = createAction(
  '[Events] Remove Event',
  props<{ eventId: number }>()
);

export const clearEvents = createAction('[Events] Clear Events');
