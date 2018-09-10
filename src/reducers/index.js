import { combineReducers } from 'redux';
import * as actions from '../actions/todo';
import { createReducers } from '../utils/redux';

const initialState = {
  num: '1',
};
const reducers = createReducers(initialState, {
  aaa() {
    return { num: '2' }
  },
  b() {
    return { a: 'www' };
  }
})

const reducers1 = createReducers({}, {
  c(state, actions) {
    console.log('state, actions', state, actions);
    return { num: actions.num };
  }
})

export default {
  reducers,
  reducers1,
}