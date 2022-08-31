// == Composant
import { Form as Formulaire, Input } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

function Form() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);
  const messages = useSelector((state) => state.messages);
  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: event.target.value,
    });
  };
  const change = () => {
    messages.push(value);
    console.log(messages);
  };

  return (
    <Formulaire onSubmit={change}>
      <Formulaire.Field>
        <Input
          action=">>"
          value={value}
          onChange={handleChange}
        />
      </Formulaire.Field>
    </Formulaire>
  );
}

// == Export
export default Form;
