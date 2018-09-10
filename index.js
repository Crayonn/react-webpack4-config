import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './src/routers';
import reducer from './src/reducers';
import { createStoreConfig } from './src/utils/redux';

const store = createStoreConfig(
  reducer,
)

ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('app'),
)
