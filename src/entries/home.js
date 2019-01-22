import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/Home';
import data from '../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';

const initialState = {
  data: {
    ...data,
  },
  search: [],
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//console.log(store.getState());

const homeContainer = document.getElementById('home-container');
//const holaMundo = <h1>Hola Mundo!</h1>;

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer
);
