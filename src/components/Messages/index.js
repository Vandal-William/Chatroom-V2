// == Composant
import Message from 'src/components/Message';
import { useSelector } from 'react-redux';
import './style.scss';

function Messages() {
  const messages = useSelector((state) => state.messages);
  return (
    <div className="Messages">
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
        />
      ))}
    </div>
  );
}
// == Export
export default Messages;
