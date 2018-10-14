import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reduxStore from './store';

import 'main.scss';

import {App} from 'app';

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('mount'),
);
