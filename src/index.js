import React from 'react'

import { render } from 'react-dom'

// Import css
import './index.css'

// Import Components
import Main from './components/Main'
import Single from './components/Single'
import EntryList from './components/EntryList'

// Import react router dependecies
import { Router, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const router = (
    <BrowserRouter>
        <div>
            <Main/>
            <Route exact path='/' component={EntryList}></Route>
            <Route path='/view' component={Single}></Route>
        </div>
    </BrowserRouter>
)

render(router, document.getElementById('root'))