import { TOGGLE_SETTINGS_OPEN } from '../actions';

const initialState = {
  messages: [],
  newMessage: '',
  emojiOpen: false,
  settingsOpen: false,
  user: 'Anonyme',
  logged: false,
  loading: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: true,
      };
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
          action.message,
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
    case 'SAVE_USER':
      return {
        ...state,
        user: action.pseudo,
        logged: true,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
