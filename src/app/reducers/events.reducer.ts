import { createReducer, on } from '@ngrx/store';
import { addEvent, removeEvent, clearEvents } from '../actions/events.actions';
import { EventMeet } from '../models/event-meet';

export const initialState: EventMeet[] = [];

export const selectSelectedEvents = (state: { selectedEvents: EventMeet[] }) => state.selectedEvents;

export const selectedEventsReducer = createReducer(
  initialState,
  on(addEvent, (state, { event }) => {
    console.log('Reducer: Adding event', event);
    return [...state, event];
  }),
  on(removeEvent, (state, { eventId }) => {
    console.log('Reducer: Removing event with id', eventId);
    return state.filter((event) => event.id !== eventId);
  })
);
