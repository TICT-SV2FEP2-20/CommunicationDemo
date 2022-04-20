/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { combineReducers, createStore } from 'redux';
import InputReducer from './reduxReducer';

const rootReducer = combineReducers(
  {
    inputReducer: InputReducer,
  },
);

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
