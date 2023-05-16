import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
   _id: new Date().getTime(),
   title: "Titulo del evento",
   notes: "Notas del evento",
   start: new Date(),
   end: addHours(new Date(), 2),
   bgColor: "#fafafa",
   user: {
     id: "123465",
     name: "Rafael Brenes",
   },
 }

export const calendarSlice = createSlice({
   name: 'calendar',
   initialState: {
      events: [tempEvent],
      activeEvent: null
   },
   reducers: {
    onSetActiveEvents: ( state, { payload } )=>{
       state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload } ) =>{
      state.events.push( payload );
      state.activeEvent = null;
    }

   }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvents, onAddNewEvent } = calendarSlice.actions;