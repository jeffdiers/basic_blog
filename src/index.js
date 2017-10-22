import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import $ from 'jquery'; 

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

// Import css
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

// Import Components
import App from './components/App'
import Single from './components/Single'
import EntryList from './components/EntryList'
import NewEntry from './components/NewEntry'

// Import styles for the text editor
// import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'react-mde/lib/styles/react-mde.css';
import 'react-mde/lib/styles/react-mde-command-styles.css';
import 'react-mde/lib/styles/markdown-default-theme.css';
// import './styles/demo.scss';

// Import style for medium style editor
import 'medium-draft/lib/index.css';

// Import store
import store, { history } from './store'



const router = (
    <Provider store={store}>
        <Router history ={history}>
            <Route path="/" component={App}>
                <IndexRoute component={EntryList}></IndexRoute>
                <Route path="/new-entry" component={NewEntry}></Route>
                <Route path="/entry/:entrySlug" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)


render(router, document.getElementById('root'))
