import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import sample from './pages/about/redux';

const rootReducer = combineReducers({ sample });
export default rootReducer;

let devredux = f => f;
try {
  devredux = window && window.devToolsExtension ? window.devToolsExtension() : f => f;
} catch (e) {
  console.log('In server...', e);
}

export const configure = (initialState = {}) => {
  console.log('initial state', initialState);
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    devredux
  ));
};
