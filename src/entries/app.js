import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Videos from '../pages/containers/Videos';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../pages/components/Header';
import Home from '../pages/components/Home';
import Contacto from '../pages/components/Contacto';
import Perfil from '../pages/components/Perfil';
import NotFound from '../pages/components/NotFound';

const store = createStore(
  reducer,
  map({}),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container');

render(
  <BrowserRouter>
    <Provider store={store}>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/contacto" component={Contacto} />
          <Redirect from="/v" to="/videos" />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Provider>
  </BrowserRouter>
  , homeContainer
);
