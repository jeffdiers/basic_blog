import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Main extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h4 className="col-xs-1">
                        <Link to='/'>Home</Link>
                    </h4>
                    <h4 className="col-xs-11">
                        <Link to='/new-entry'>New Entry</Link>
                    </h4>
                </div>
                <div>
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        )
    }
}