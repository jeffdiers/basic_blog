//a reducer takes in two things

//1. the action (info about what happened)
//2. a copy of the current state

//give action, store > let me work > return store

//take a copy of the state, and return modifyed state
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import entries from './entries'
import postEntry from './postEntry'
import publishEntry from './publishEntry'

const rootReducer = combineReducers({
  entries,
  postEntry,
  publishEntry,
  routing: routerReducer, // new
});

export default rootReducer

