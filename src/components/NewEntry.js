import React, { Component } from 'react'

export default class NewEntry extends Component{
    constructor(props) {
        super(props)
        this.state = {
            entry: {
                title: '',
                body: '',
                id: null
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.publishEntry = this.publishEntry.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    handleChange(propertyName, event) {
        const entry = this.state.entry
        entry[propertyName] = event.target.value
        this.setState({entry: entry})
    }

    handleSubmit(event) {
        this.props.createNewEntry(this.state.entry)
        event.preventDefault()
    }

    publishEntry(event) {
        this.props.publishEntry(this.props.postEntry.newEntry.payload.data.sys.id)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>
                    New Entry 
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={this.state.entry.title} 
                        onChange={this.handleChange.bind(this, 'title')} />
                    <textarea 
                        type="text"
                        placeholder="new post...." 
                        value={this.state.entry.body} 
                        onChange={this.handleChange.bind(this, 'body')} />
                    <input type="submit" value="Submit" />
                </form>
                {this.props.postEntry.error ? <strong>error posting</strong> : null }
                {this.props.postEntry.newEntry.payload ? <button onClick={this.publishEntry}>publish</button> : null}
            </div>
        )
    }
}