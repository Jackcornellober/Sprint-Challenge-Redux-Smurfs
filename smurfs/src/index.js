import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SmurfVillage from './components/SmurfVillage';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <SmurfVillage />
  </Provider>,
  document.getElementById('root')
);
