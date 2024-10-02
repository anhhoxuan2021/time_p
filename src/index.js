import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import { Router, browserHistory } from 'react-router';
import Root from './Root';

import configureStore from './store/configureStore';

const store = configureStore();
render(
  <Provider store={store}>
      <Root />
  </Provider>,
  document.getElementById('root')
);
