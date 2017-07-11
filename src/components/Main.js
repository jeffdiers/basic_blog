import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component{
    render() {
        return (
            <div>
                <h1>
                    <Link to='/'>Blog</Link>
                </h1>
            </div>
        )
    }
}