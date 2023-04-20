
export const CalendarEvent = ({ event }) => {

    const { title, notes, user } = event;

  return (
    <>
        <strong>{ title }</strong>
        <p>- { notes }</p>
    </>
  )
}
