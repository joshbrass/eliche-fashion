import PropTypes from 'prop-types';

const Card = ({ className, children }) => {
  return (
    <article className={`card ${className}`}>
      {children}
    </article>
  );
};

// Define propTypes to validate props
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired, // children is required
};

// Default props (optional)
Card.defaultProps = {
  className: '',
};

export default Card;
