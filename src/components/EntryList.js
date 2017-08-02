import React, { Component } from 'react'
import { Link } from 'react-router'

export default class EntryList extends Component{
    componentWillMount() {
        this.props.fetchEntries()
    }

    render() {
        return (
            <div>
                {this.props.entries.all.data === undefined ? <div></div> : 
                    this.props.entries.all.data.items.map((entry, i) => 
                        <div key={i}><Link to={`/${entry.fields.slug}`}>{entry.fields.title}</Link></div>
                    )
                }
            </div>
        )
    }
}