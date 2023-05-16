import { addHours } from "date-fns";
import { useUiStore, useCalendarStore } from "../../hooks"
import {  } from "../../hooks/useUiStore"

export const FabAddNew = () => {

const { openDateModal } = useUiStore();
 const { setActiveEvents } =  useCalendarStore();

const handleClickNew=()=>{
  openDateModal();
  setActiveEvents(
    {      
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        id: "123465",
        name: "Rafael Brenes",
      }
    }
  );
}

  return (
    <button
        className="btn btn-primary fab"
        onClick={ handleClickNew }
    >
        <i className="fas fa-plus" ></i>
    </button>
  )
}
