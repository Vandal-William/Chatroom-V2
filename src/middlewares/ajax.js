import axios from 'axios';
// eslint-disable-next-line no-unused-vars
const ajax = (store) => (next) => (action) => {
  if (action.type === 'LOGIN') { // dispatch dans settings
    const { email, password } = store.getState();
    axios.post('http://localhost:3001/login', {
      email: email,
      password: password,
    })
      .then((response) => {
        // en cas de réussite de la requête
        store.dispatch({
          type: 'SAVE_USER',
          pseudo: response.data.pseudo,
        });
      })
      .catch((error) => {
        // en cas d’échec de la requête
        console.log(error);
      });
  }
  next(action);
};

export default ajax;
