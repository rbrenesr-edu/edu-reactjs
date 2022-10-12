import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({author, quote}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width:0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    //console.log(pRef.current.getBoundingClientRect() );
    setBoxSize ({  width, height });
  
  }, [quote])

  return (
    <>
      <blockquote className="blockquote text-start" style={{ display: 'flex' }} >
          <p ref={ pRef } className="mb-1">{author}</p>
          <footer className="blockquote-footer">{quote}</footer>
      </blockquote>

    <code>{ JSON.stringify( boxSize ) }</code>

    </>
  )
}



Quote.propTypes = {
    author : PropTypes.string.isRequired,
    quote : PropTypes.string.isRequired
  }