import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './modules';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

const initialState = JSON.parse(window.INITIAL_STATE);
const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
