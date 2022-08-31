import { getNextId } from 'src/selectors';

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
  newMessage: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'WRITE':
      return {
        ...state,
        newMessage: action.value,
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: getNextId(state.messages),
            content: state.newMessage,
            author: 'william',
          },
        ],
        newMessage: '',
      };
    default:
      return state;
  }
}

export default reducer;
