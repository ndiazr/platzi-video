import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/Home';
//import data from '../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
//import data from '../schemas/index';

//console.log(data);

/*const initialState = {
  data: {
    //...data,
    entities: data.entities,
    categories: data.result.categories,
    search: [],
  },
  modal: {
    visibility: false,
    mediaId: null,
  },
}*/

const store = createStore(
  reducer,
  {},
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
