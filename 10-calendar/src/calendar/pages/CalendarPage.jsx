import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";

import { Navbar,CalendarEvent } from "../";
import { localizer, getMessagesES } from "../../helpers";

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

export const eventStyleGetter = (event, start, end, isSelected) => {
  // console.log({ event, start, end, isSelected });

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

export const CalendarPage = () => {
  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px )" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
      />
    </>
  );
};
