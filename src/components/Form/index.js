// == Composant
import { Form as Formulaire, Input } from 'semantic-ui-react';

function Form() {
  return (
    <Formulaire>
      <Formulaire.Field>
        <Input action="Submit" />
      </Formulaire.Field>
    </Formulaire>
  );
}

// == Export
export default Form;
