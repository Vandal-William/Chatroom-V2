// == Composant
import { useSelector } from 'react-redux';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import Tools from 'src/components/Tools';
import Settings from 'src/components/Settings';
import './style.scss';

function Chatroom() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <Settings />
      <div className="Chatroom">
        {loading && <div className="Chatroom-loading">Veuillez patienter...</div>}
        <Messages />
        <Tools />
        <Form />
      </div>
    </>
  );
}

// == Export
export default Chatroom;
