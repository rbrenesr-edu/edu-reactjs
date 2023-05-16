import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvents } from "../store";



export const useCalendarStore = () => {

    const dispatch = useDispatch();    
    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvents =  ( calendarEvent ) => {
      dispatch( onSetActiveEvents( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent )=>{
      // TODO Llegar al backend

      // TODO If todo bien
      if( calendarEvent._id ){
        //* Actualizando
      }else{
        //*Creando

        dispatch( onAddNewEvent( { ...calendarEvent, _id: new Date().getTime() } ) );
      }

    }

  return {
    //**Propiedades */
    events,
    activeEvent,
    //**Eventos */
    setActiveEvents,
    startSavingEvent
  }
}
