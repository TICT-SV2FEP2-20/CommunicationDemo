/* eslint-disable default-param-last */
import { ADD_INPUT } from './reduxAction';

const initialState = {
  value: '',
};

const InputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      return {
        value: action.value,
      };
    default:
      return state;
  }
};

export default InputReducer;
