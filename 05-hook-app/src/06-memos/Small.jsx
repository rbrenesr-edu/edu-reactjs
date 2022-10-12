import { memo } from 'react';

export const Small = memo( ({ value }) => {

    console.log('me dibuje de nuevo :(');

  return (
    <small>{ value } </small>
  )
})