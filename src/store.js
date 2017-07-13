import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

//import ther root reducer
import rootReducer from './reducers/index'

import entries from './data/entries'

//create an object for the default data
const defaultState = {
    entries
}

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
)

const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

export default store