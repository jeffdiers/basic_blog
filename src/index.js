import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

// Import css
import './index.css'

// Import Components
import App from './components/App'
import Single from './components/Single'
import EntryList from './components/EntryList'

// Import store
import store, { history } from './store'

const router = (
    <Provider store={store}>
        <Router history ={history}>
            <Route path="/" component={App}>
                <IndexRoute component={EntryList}></IndexRoute>
                <Route path="/:entrySlug" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)


render(router, document.getElementById('root'))
