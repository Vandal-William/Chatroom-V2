// == Composant
import './style.scss';
import PropTypes from 'prop-types';

function Message({ author, content }) {
  return (
    <div className="Message">
      <p>{author}</p>
      <p className="message-chat">{content}</p>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
// == Export
export default Message;
