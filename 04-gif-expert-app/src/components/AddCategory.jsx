import { useState } from 'react';

export const AddCategory = ( { onNewValue } ) => {

  const [inputValue, setInputValue] = useState('')
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }


  const onSubmit=(event)=>{
    event.preventDefault();
    
    if( inputValue.trim().length <= 1 ) return;
        
    onNewValue(inputValue.trim());
    setInputValue ('');        
  }

  return (
    <>
        <form onSubmit={ (event) => { onSubmit(event) } }>
            <input
                type="test"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ (event)=>{onInputChange(event)}  }
                />
        </form>
    </>
  )
}
