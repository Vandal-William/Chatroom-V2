// == Composant
import { Form as Formulaire } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
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
  const handleSubmit = () => {
    dispatch({
      type: 'ADD_MESSAGE',
    });
  };
  return (
    <Formulaire className="form" onSubmit={handleSubmit}>
      <Formulaire.Field>
        <input
          className="from-input"
          value={newMessage}
          onChange={handleChange}
          // 2....................................
          ref={element}
          // ..........=> suite composant Messages
        />
      </Formulaire.Field>
    </Formulaire>
  );
}

// == Export
export default Form;
