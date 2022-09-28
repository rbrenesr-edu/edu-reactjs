import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewValue } ) => {


  const [inputValue, setInputValue] = useState('');
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
        <form onSubmit={ (event) => { onSubmit(event) } } aria-label="form">
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


AddCategory.propTypes={
  onNewValue: PropTypes.func.isRequired,
}