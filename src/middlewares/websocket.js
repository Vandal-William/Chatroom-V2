// je récupère la fonction pour se connecter au serveur de websocket de ma bibliothèque socket.io
import { io } from 'socket.io-client';

// tout de suite, j'établis la connexion au serveur
const socket = io('ws://localhost:3001');

const websocket = (store) => (next) => (action) => {
  if (action.type === 'SEND_MESSAGE') {
    console.log('coucou');
    // quand l'utilisateur a l'intention d'envoyer un message
    // je l'envoie au serveur de websocket
    const state = store.getState();
    socket.emit('send_message', {
      content: state.newMessage.trim(),
      author: state.user,
    });
  }
  else if (action.type === 'CONNECTION_WEBSOCKET') {
    // tout de suite, je me mets en mode écoute pour préparer quoi faire quand un message arrive
    socket.on('send_message', (data) => {
      console.log('un message arrive', data);
      store.dispatch({
        type: 'ADD_MESSAGE',
        message: data,
      });
    });
  }
  next(action);
};

export default websocket;
