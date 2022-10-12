import { memo, useMemo } from "react";

export const ShowIncrement = memo(({ increment }) => {

    
    console.log('me generé...')

  return (
    <button
        className="btn btn-primary"
        onClick={ ()=> {
            increment(5);
        } }
    >Incrementar</button>
  )
})
