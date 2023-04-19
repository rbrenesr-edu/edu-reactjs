import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import { Navbar } from "../"

import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const myEventsList = [
  {
    title:'Titulo del evento',
    notes: 'Notas del evento',
    start: new Date(),
    end: addHours( new Date(),2 ),
    bgColor: '#fafafa',
    user:{
      id: '123465',
      nombre:'Rafael Brenes'
    }
  }
]


export const CalendarPage = () => {
  return (
    <>
      <Navbar/>

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
    />

    </>
  )
}
