import PropTypes from 'prop-types';

import './style.scss';

function Alert({ text }) {
  return (
    <p className="alert">{text}</p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Alert;
