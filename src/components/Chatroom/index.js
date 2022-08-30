// == Composant
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import './style.scss';

function Chatroom() {
  return (
    <div className="Chatroom">
      <Messages />
      <Form />
    </div>
  );
}

// == Export
export default Chatroom;
