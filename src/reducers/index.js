const initialState = {

};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'INSTRUCTION':
      return {
        ...state, // déverse le contenue du state
        // le ou les state qui change
      };
    default:
      return state;
  }
}

export default reducer;
