// == Composant
import './style.scss';
import PropTypes from 'prop-types';

function Message({ author, content }) {
  return (
    <div className="message">
      <p className="message-author">{author}</p>
      <p className="message-content">{content}</p>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
// == Export
export default Message;
