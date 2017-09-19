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
    error: null,
    loading: false
}

const postEntry = {
    newEntry: {},
    error: null,
    loading: false
}

const publishEntry = {
    entry: {},
    error: null,
    loading: false
}

const authors = {
    all: {},
    error: null,
    loading: false
}

const unpublishedEntry = {
    success: null,
    error: null,
    loading: false
}

const deletedEntry = {
    success: null,
    error: null,
    loading: false
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