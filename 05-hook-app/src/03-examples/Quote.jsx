import PropTypes from 'prop-types';

export const Quote = ({author, quote}) => {
  return (
      <blockquote className="blockquote text-start">
          <p className="mb-1">{author}</p>
          <footer className="blockquote-footer">{quote}</footer>
      </blockquote>
  )
}



Quote.propTypes = {
    author : PropTypes.string.isRequired,
    quote : PropTypes.string.isRequired
  }