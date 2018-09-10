import React from 'react';
import "./index.css";
import { connect } from 'react-redux';
import * as actions from '../../actions/todo';


class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div onClick={() => this.props.dispatch(actions.asHandle('1'))}>
        sssshjhjs
      </div>
    );
  }
}

export default connect(state => state)(App);
