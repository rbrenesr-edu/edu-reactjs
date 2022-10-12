import { useMemo, useState } from 'react';
import { useCounter } from '../Hooks';

const heavyStuff=( iterationNumbre )=>{

  for( let i = 0; i < iterationNumbre; i++ ){
    console.log('imprimiendo...');
  }
  return `${ iterationNumbre } iteraciones realizadas!`;
}

export const MemoHook = () => {

    const { counter,  increase } = useCounter(5000);
    const [show, setShow] = useState(true);    
    const memorizedValue = useMemo( ()=> heavyStuff( counter ), [counter] );
    

  return (

    <>
        <h1>MemoHook</h1>
        <hr></hr>
        <h2>Counter: <small>{counter}</small> </h2>
        <h4>{ memorizedValue }</h4>
        <button 
            className='btn btn-secondary'
            onClick={ ()=>increase() }>
                +1
            </button>
        
        <button 
            className='btn btn-outline-primary'
            onClick={ ()=>setShow(!show) }>
               Show/Hide { JSON.stringify(show) }
            </button>
    </>
  )
}
