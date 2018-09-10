import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import App from './pages/App';

export default ({ store }) => (
  <Provider store={store}>
    <Route component={App} path='/' />
  </Provider>
)