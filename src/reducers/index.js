//a reducer takes in two things

//1. the action (info about what happened)
//2. a copy of the current state

//give action, store > let me work > return store

//take a copy of the state, and return modifyed state
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import entries from './entries'

const rootReducer = combineReducers({
  entries,
  routing: routerReducer, // new
});

export default rootReducer

