const validation = (store) => (next) => (action) => {
  // si l'action est celle qui m'intéresse je vais faire mes validations
  if (action.type === 'SEND_MESSAGE') {
    const state = store.getState();
    // si tout va bien, je laisse passer l'action au reducer pour déclencher un nouveau state
    if (state.newMessage.trim() !== '') {
      next(action);
    }
    // sinon je fais, rien, cad que l'action n'atteindre pas le reduceret n'aura aucun effet
  }
  // sinon je laisse passer sans réagir
  else {
    next(action);
  }
};

export default validation;
