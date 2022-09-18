import { useState } from 'react';

export const AddCategory = ( { onNewValue } ) => {

  const [inputValue, setInputValue] = useState('')
  const onInputChange = (event) => {
    //console.log(event.target.value);
    setInputValue(event.target.value);
  }


  const onSubmit=(event)=>{
    //console.log(event);
    event.preventDefault();
    //console.log(inputValue);
    
    if( inputValue.trim().length <= 1 ) return;
    
    //setCategories( cat =>  [inputValue, ...cat]);
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
