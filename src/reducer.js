import { createReducer } from './createReducer';

const reducer = {
  ADD: state => {
    return {
      ...state,
      count: state.count + 1,
    };
  },
  SUB: state => {
    return {
      ...state,
      count: state.count - 1,
    };
  },
};

export default createReducer(reducer);
