//#region Importaciones
import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'

import { addHours, differenceInSeconds } from "date-fns";
import es from 'date-fns/locale/es';

import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { useCalendarStore, useUiStore } from "../../hooks";

//#endregion

// #region Estilos globales

registerLocale('es', es) //*Idioma en español

const customStyles = { //*Estilos básicos para el modal
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",    
  },
};

Modal.setAppElement("#root"); //*Agrega el modal al root

// #endregion


export const CalendarModal = () => {

//*#region useState - Valores iniciales

  const { activeEvent, startSavingEvent } = useCalendarStore();
  
  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  //*Se utiliza para evaluar si el usuario intentó hacer el Submite del formulario
  const [formSubmitted, setFormSubmitted] = useState(false);

  const titleValidClass = useMemo(() => {
    if(!formSubmitted) return '';

    return ( formValues.title.length > 0 )
           ? ''
           : 'is-invalid'

  }, 
  [ formValues.title, formSubmitted ])

  useEffect(() => {
    if( activeEvent !== null ){
      setFormValues({ ...activeEvent });
    }
  
    
  }, [ activeEvent ])
  


//#endregion

//*#region onEvents
  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (event, changin) => {
    setFormValues({
      ...formValues,
      [changin]: event
    });
  };

  const onCloseModal = () => {
    // console.log("cerrando modal");
    closeDateModal();
  };

//#endregion

//*#region onSubmit
  const onSubmit = async( event )=>{
    event.preventDefault();
    setFormSubmitted(true);
    
    // !validaciones
    //* endDate no debe ser menor a la startDate
    const difference = differenceInSeconds( formValues.end, formValues.start );
    
    if( isNaN(difference)){      
      Swal.fire('','Las fechas deben tener valores correctos!','error');
      return;
    }

    if( difference < 1 ){      
      Swal.fire('','Las fecha final debe ser mayor a la fecha inicio!','error');
      return;
    }

    if( formValues.title.length <1 ) return;

    console.log(formValues);

    await startSavingEvent( formValues );    
    closeDateModal();
    setFormSubmitted(false);
 
  }
//#endregion

//*#region hooks

 const { isDateModalOpen, closeDateModal } =  useUiStore();

//#endregion

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={ onSubmit }>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker            
            selected={formValues.start}
            onChange={  (event)=> onDateChanged (event, 'start') }
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker            
            minDate={ formValues.start }
            selected={formValues.end}
            onChange={  (event)=> onDateChanged (event, 'end') }
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className= { `form-control ${ titleValidClass }` } 
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChanged}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
