import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import App from './pages/App';

export default ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route component={App} path='/home' />
      <Route component={() => (<div>login</div>)} />
    </Switch>
  </Provider>
)