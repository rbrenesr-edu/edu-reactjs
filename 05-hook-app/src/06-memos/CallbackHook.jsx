import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value  );
      },
      [],
    )
    

    // const incrementFather=()=>{
    //     setCounter( counter +1 );
    // }

  return (
    <>
        <h1>CallbackHook</h1>
        <hr></hr>
        <h2>Counter: { counter }</h2>

        <ShowIncrement increment={incrementFather} ></ShowIncrement>

    </>
  )
}
