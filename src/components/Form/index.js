// == Composant
import { Form as Formulaire, Input } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

function Form() {
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
    <Formulaire onSubmit={handleSubmit}>
      <Formulaire.Field>
        <Input
          action="Submit"
          value={newMessage}
          onChange={handleChange}
        />
      </Formulaire.Field>
    </Formulaire>
  );
}

// == Export
export default Form;
