import { useState } from 'react';
import { useCounter } from '../Hooks';
import { Small } from './Small';

export const Memoriza = () => {

    const { counter,  increase } = useCounter(10);
    const [show, setShow] = useState(true);

  return (

    <>
        <h1>Memoriza</h1>
        <hr></hr>
        <h2>Counter: <Small value={ counter } ></Small> </h2>
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
