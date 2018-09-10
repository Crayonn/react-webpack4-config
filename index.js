import React from 'react';
import ReactDOM from 'react-dom';
import App from './src';
import { Provider } from 'react-redux';
import reducer from './src/reducers';
import { createStoreConfig } from './src/utils/redux';

const store = createStoreConfig(
  reducer,
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
