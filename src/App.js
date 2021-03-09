import React from 'react';
import './App.css';
import List from './List';
import { connect } from 'react-redux'

function App({state, handleAdding, handleDel, handleInc}) {
  return (
    <div className="App">
      <div style={{backgroundColor: 'gray'}}>
        <button onClick={function (e) { handleAdding() }}>Add counter</button>
      </div>
      <List counters={state} handleDel={handleDel} handleInc={handleInc}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdding: () => { dispatch({type: 'ADD_COUNTER'}) },
    handleInc: (xid, xint) => { dispatch({type: 'INC_COUNTER', payload: {id: xid, int: xint}}) },
    handleDel: (x) => { dispatch({type: 'DEL_COUNTER', payload: x}) } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
