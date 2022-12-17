import { useState } from 'react';


export const useCounter = (inicialValue = 1) => {

    const [counter, setCounter] = useState(inicialValue)

    const increase = (value = 1) => {
        //setCounter(counter + value);
        setCounter((current) => current + value);
    };

    const reset = () => {
        setCounter(inicialValue)
    };


    const deincrement = (value = 1) => {
        // if (counter < 1) return;
        // setCounter(counter - value)
        //if ((current) => current < 1) return;
        setCounter((current) => current - 1);

    };

    return {
        counter: counter,
        increase: increase,
        deincrement: deincrement,
        reset: reset,
    }


}