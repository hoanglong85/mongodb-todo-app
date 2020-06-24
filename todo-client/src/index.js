import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/AppContainer';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createReduxMiddware from 'redux-saga'


import rootSagas from './sagas';
import myReducer from './reducers/index';
const reduxMiddware = createReduxMiddware();

var store = createStore(
  myReducer,
  applyMiddleware(reduxMiddware)
);

reduxMiddware.run(rootSagas)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('App')
);
serviceWorker.unregister();
