const initialState = {
  messages: [
    {
      author: 'Super chat',
      content: 'hello',
      id: 1,
    },
    {
      author: 'Super chat',
      content: 'ça va ?',
      id: 2,
    },
    {
      author: 'Super Chien',
      content: 'oui',
      id: 3,
    },
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state, // déverse le contenue du state
        // le ou les state qui change
      };
    case 'STORE_MESSAGE':
      return {
        ...state, // déverse le contenue du state
        // le ou les state qui change
      };
    default:
      return state;
  }
}

export default reducer;
