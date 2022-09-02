// == Composant
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Send } from 'react-feather';
import './style.scss';

function Form() {
  // mise en place d'un scroll automatique
  // 1..............................
  const element = useRef(null);
  useEffect(() => {
    element.current.focus();
  }, []);
  // .................................

  const dispatch = useDispatch();
  const newMessage = useSelector((state) => state.newMessage);
  const handleChange = (event) => {
    dispatch({
      type: 'WRITE',
      value: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      dispatch({
        type: 'ADD_MESSAGE',
      });
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        aria-label="Message"
        value={newMessage}
        onChange={handleChange}
        // 2....................................
        ref={element}
        // ..........=> suite composant Messages
      />
      <button title="Envoyer" className="form-btn" type="submit"> <Send size={42} /> </button>
    </form>
  );
}

// == Export
export default Form;
