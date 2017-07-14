import React, { Component } from 'react'
import { Link } from 'react-router'

export default class EntryList extends Component{
    render() {
        return (
            <div>
                {this.props.entries.map((entry, i) => <div key={i}><Link to={`/${entry.slug}`}>{entry.title}</Link></div>)}
            </div>
        )
    }
}