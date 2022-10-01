import { useState } from 'react';


export const useCounter = (inicialValue = 1) => {

    const [counter, setCounter] = useState(inicialValue)

    const increase = (value = 1) => {
        setCounter(counter + value)
    };

    const reset = () => {
        setCounter(inicialValue)
    };


    const deincrement = (value = 1) => {
        if (counter < 1) return;
        setCounter(counter - value)
    };

    return {
        counter: counter,
        increase: increase,
        deincrement: deincrement,
        reset: reset,
    }


}