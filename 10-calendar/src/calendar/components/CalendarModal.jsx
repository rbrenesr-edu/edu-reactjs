//#region Importaciones
import { useState } from "react";
import Modal from "react-modal";

import { addHours, differenceInSeconds } from "date-fns";
import es from 'date-fns/locale/es';

import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
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

//#region useState - Valores iniciales
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });
//#endregion


//#region onEvents
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
    console.log("cerrando modal");
    setIsModalOpen(false);
  };

//#endregion

//#region onSubmit
  const onSubmit =( event )=>{
    event.preventDefault();
    
    // !validaciones
    //* endDate no debe ser menor a la startDate
    const difference = differenceInSeconds( formValues.end, formValues.start );
    
    if( isNaN(difference)){
      alert('Las fechas deben tener valores correctos!');
      return;
    }

    if( difference < 1 ){
      alert('Las fecha final debe ser mayor a la fecha inicio!');
      return;
    }

    if( formValues.title.length <1 ){ alert( 'Debe de ingresar un título!' ); return; }
      
    console.log(formValues);


    // TODO: 
    //* Cerrar modal
    //* remover errores en pantalla
    //* Otros

  }
//#endregion

  return (
    <Modal
      isOpen={isModalOpen}
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
            className="form-control"
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
