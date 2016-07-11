const monocleApp = function(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_STATE':
      const updatedState = Object.assign({}, state);
      if (state[action.name]) {
        updatedState[action.name] = Object.assign({}, action.state);
      } else {
        const currentComponentState = Object.assign({}, updatedState[action.name]);
        updatedState[action.name] = Object.assign(currentComponentState, action.state);
      }
      return updatedState;
    default:
      return state;
  }
}

export default monocleApp;