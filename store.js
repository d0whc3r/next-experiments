import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const reducer = (state = {lastUpdate: 0, light: false}, action) => {
  switch (action.type) {
    case 'TICK':
      return {lastUpdate: action.ts, light: !!action.light};
    default:
      return state
  }
};

export const startClock = () => dispatch => {
  return setTimeout(() => dispatch({type: 'TICK', light: true, ts: Date.now()}), 2000)
};

export const initStore = (initialState) => {
  console.log('initial state', initialState);
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
};
