import { getNextId } from 'src/selectors';
import { TOGGLE_SETTINGS_OPEN } from '../actions';

const initialState = {
  messages: [],
  newMessage: '',
  emojiOpen: false,
  settingsOpen: false,
  user: 'Anonyme',
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
            author: state.user,
          },
        ],
        newMessage: '',
      };
    case 'TOGGLE_EMOJI_OP':
      return {
        ...state,
        emojiOpen: !state.emojiOpen,
      };
    case 'PICK_EMOJI':
      return {
        ...state,
        emojiOpen: false,
        newMessage: state.newMessage + action.emoji,
      };
    case TOGGLE_SETTINGS_OPEN:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.value,
        // la notation entre crochet me permet de spécifier
        // via une expression le nom de la propriété cliblée
      };
    default:
      return state;
  }
}

export default reducer;
