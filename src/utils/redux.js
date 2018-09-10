import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export function createStoreConfig(reducers = {}, preloadedState) {
  let middlewares = [thunk];

  const rootReduce = combineReducers(reducers);

  if (process.env.NODE_DEV !== 'production') {
    middlewares = [
      ...middlewares,
      createLogger()]
  }

  return createStore(
    rootReduce,
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}

export const createReducers = (initialState, reducerHandles) =>
  (state = initialState, actions) => {
    if (reducerHandles && reducerHandles[actions.type]) {
      return reducerHandles[actions.type](state, actions);
    }

    return state;
  }