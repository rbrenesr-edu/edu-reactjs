import { useState } from 'react';
import PropTypes from 'prop-types'

/*function handleAdd( event, newValue ){
    console.log(newValue);
}*/



export const CounterApp = ( {value} ) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = ( event, newValue ) => {
        if(newValue == 'suma')
            setCounter( counter + 1 );
        if(newValue == 'resta')
            setCounter( counter - 1 );
        if(newValue == 'reset')
            setCounter( value ); 
    }

    return (
        <>     
            <h1> CounterApp </h1>
            <h2> { counter } </h2>    
              
            <button onClick={ (event) => handleAdd(event, 'suma') } > + 1 </button>
            <button onClick={ (event) => handleAdd(event, 'resta') } > - 1 </button>
            <button onClick={ (event) => handleAdd(event, 'reset') } > Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,    
}
CounterApp.defaultProps = {
    value: 0,    
}