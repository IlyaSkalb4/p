import { createReducer, on } from '@ngrx/store';
import { addEvent, removeEvent, clearEvents } from '../actions/events.actions';
import { EventMeet } from '../models/event-meet';

export const initialState: EventMeet[] = [];

export const eventsReducer = createReducer(
  initialState,
  on(addEvent, (state, { event }) => {
    if (state.find((e) => e.id === event.id)) return state;
    return [...state, event];
  }),
  on(removeEvent, (state, { eventId }) =>
    state.filter((event) => event.id !== eventId)
  ),
  on(clearEvents, () => [])
);
