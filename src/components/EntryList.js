import React, { Component } from 'react'
import { Link } from 'react-router'

export default class EntryList extends Component{
    componentWillMount() {
        this.props.fetchEntries()
    }

    deleteEntry(entryId, event) {
        this.props.unpublishEntry(entryId)
        // this.props.entries.all.data.items.filter((entry) => entry.sys.id !== entryId)
        event.preventDefault()
    }

    render() {
        this.props.deletedEntry.error ? alert('cannot delete') : null
        this.props.unpublishedEntry.success ? alert('unpublished') : null
        return (
            <div>
                <div className="list-group">
                {this.props.entries.all.data === undefined ? <div></div> : 
                    this.props.entries.all.data.items.map((entry, i) => 
                        <div className="list-group-item" key={i}>
                            <Link to={`/entry/${entry.fields.slug}`}>{entry.fields.title}</Link>
                            <span className="label label-info date">{entry.fields.date}</span>
                            <button onClick={this.deleteEntry.bind(this, entry.sys.id)} type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)
                }
                </div>
            </div>
        )
    }
}