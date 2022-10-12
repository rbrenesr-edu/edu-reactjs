import { useRef } from 'react';

export const FocusScreen = () => {


    const inputRef = useRef();
    

    const onClick = (nombre) =>{
        //document.querySelector('input').value = nombre;
        console.log(inputRef);
        inputRef.current.select();
    }

  return (
    <>
        <h1>FocusSccreen</h1>
        <hr></hr>

        <input
            ref={ inputRef }
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control">            
        </input>

        <button
            className="btn btn-primary mt-4"
            onClick={ ()=> onClick('rafael') }
        >Set focus</button>

    </>
  )
}
