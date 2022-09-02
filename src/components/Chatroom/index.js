// == Composant
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import Tools from 'src/components/Tools';
import Settings from 'src/components/Settings';
import './style.scss';

function Chatroom() {
  return (
    <>
      <Settings />
      <div className="Chatroom">
        <Messages />
        <Tools />
        <Form />
      </div>
    </>
  );
}

// == Export
export default Chatroom;
