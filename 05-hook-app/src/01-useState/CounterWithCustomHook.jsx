import { useCounter } from '../Hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increase, deincrement, reset } = useCounter();

  return (
    <>
        <h1>CounterWithCustomHook: { counter }</h1>
        <hr />
        <button className="btn btn-primary" onClick={ ()=> increase(2) }>+1</button>
        <button className="btn btn-primary" onClick={ reset }>Reset</button>
        <button className="btn btn-primary" onClick={ ()=> deincrement(2) }>-1</button>

    </>
  )
}
