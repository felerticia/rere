import React, { Component } from 'react';
import './App.css';
import {add,del} from './actions/primMath'
import { connect } from "react-redux";

class App extends Component {
  add_(){
    this.props.addition();
  }

  sub_(){
    this.props.subtraction();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <button onClick={this.add_.bind(this)}>+</button>
        <button onClick={this.sub_.bind(this)}>-</button>
        <div>
          {this.props.primMathReducer.result}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      primMathReducer: state.primMathReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addition: () => dispatch(add()),
    subtraction: () => dispatch(del()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

