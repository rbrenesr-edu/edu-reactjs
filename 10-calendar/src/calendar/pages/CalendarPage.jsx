import { useState } from 'react';
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";

import { Navbar,CalendarEvent, CalendarModal } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useUiStore } from '../../hooks';

const myEventsList = [
  {
    title: "Titulo del evento",
    notes: "Notas del evento",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      id: "123465",
      name: "Rafael Brenes",
    },
  },
];




export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "week" )
  const eventStyleGetter = (event, start, end, isSelected) => {
  
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: "0.8",
      color: "white",
    };
  
    return {
      style,
    };
  };
  
  
  const onDoubleClick = ( event ) =>{
    // console.log({ onDoubleClick: event });
    openDateModal();
  }
  
  const onSelect = ( event ) =>{
    // console.log({ onSelect: event });
  }
  
  const onViewChanged = ( event ) => {
    localStorage.setItem("lastView", event);
    setLastView( event );
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={myEventsList}
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px )" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

<CalendarModal/>

    </>
  );
};
