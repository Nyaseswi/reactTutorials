
import React from 'react';
import { connect } from 'react-redux';
import { incrementAction } from './actions';
import { decrementAction } from './actions';


const App = ({ local_variable, incrementAction, decrementAction }) => {
  return (
    <div>
      <h1>{local_variable}</h1> <br />
      {/* <button onClick={incrementAction}>+</button> */}
      <button onClick={() => incrementAction(5)}>+</button>
      <button onClick={decrementAction}>-</button>
      <br />

    </div>
  )
}

const mapStateToProps = state => ({
  local_variable: state
})

export default connect(mapStateToProps, { incrementAction, decrementAction })(App);
