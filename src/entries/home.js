import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/Home';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

const logger = ({ getState, dispatch }) => (next) => (action) => {
  console.log('Estado anterior', getState().toJS());
  console.log('action', action);
  const value = next(action);
  console.log('Nuevo estado', getState().toJS());
  return value;
}

const store = createStore(
  reducer,
  map({}),
  applyMiddleware(logger),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer
);
