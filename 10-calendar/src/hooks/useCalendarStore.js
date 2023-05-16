import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvents } from "../store";



export const useCalendarStore = () => {

    const dispatch = useDispatch();    
    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvents =  ( calendarEvent ) => {
      dispatch( onSetActiveEvents( calendarEvent ) );
    }

  return {
    //**Propiedades */
    events,
    activeEvent,
    //**Eventos */
    setActiveEvents
  }
}
