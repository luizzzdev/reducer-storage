const createReducer = actions => {
  return (state, action) => {
    if (action.type in actions) {
      const newState = actions[action.type](state, action);
      Object.keys(newState).forEach(key => {
        localStorage.setItem(key, newState[key]);
      });
      return newState;
    }
    return state;
  };
};

export { createReducer };
