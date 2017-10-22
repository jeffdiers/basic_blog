import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import promiseMiddleware from 'redux-promise'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

//import ther root reducer
import rootReducer from './reducers/index'

// import entries from './data/entries'

const entries = {
    all: {},
    errorMessage: '',
    error: false,
    loading: true
}

const postEntry = {
    newEntry: {},
    errorMessage: '',
    error: false,
    loading: true
}

const publishEntry = {
    newEntry: {},
    errorMessage: '',
    error: false,
    loading: true
}

const authors = {
    all: {},
    error: null,
    loading: true
}

const unpublishedEntry = {
    success: null,
    error: null,
    loading: true
}

const deletedEntry = {
    success: null,
    error: null,
    loading: true
}

//create an object for the default data
const defaultState = {
    entries,
    postEntry,
    publishEntry,
    authors,
    deletedEntry,
    unpublishedEntry
}

const enhancers = compose(    
    applyMiddleware(promiseMiddleware, thunk, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

export default store