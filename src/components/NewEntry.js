import React, { Component } from 'react'

export default class NewEntry extends Component{
    constructor(props) {
        super(props)
        this.state = {
            entry: {
                title: '',
                body: '',
                slug: '',
                authorId: '',
                date: new Date()
            }
        }
        console.log(this.state.entry)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.publishEntry = this.publishEntry.bind(this)
        this.renderAuthors = this.renderAuthors.bind(this)
        this.generateSlug = this.generateSlug.bind(this)
    }

    componentWillMount() {
        this.props.resetNewEntry()
        this.props.fetchAuthors()
        this.props.fetchEntries()
    }

    handleChange(propertyName, event) {
        const entry = this.state.entry
        entry[propertyName] = event.target.value
        this.setState({entry: entry})
    }

    handleSubmit(event) {
        this.state.entry.slug === '' ? this.generateSlug(this.state.entry.title) : null
        let slug = this.state.entry.slug
        this.props.entries.all.data.items.filter((entry) => entry.fields.slug === slug).length === 1 ? alert("enter unique slug") : this.props.createNewEntry(this.state.entry)
        event.preventDefault()
    }

    publishEntry(event) {
        this.props.publishEntry(this.props.postEntry.newEntry.payload.data.sys.id)
        event.preventDefault()
    }

    renderAuthors() {
        return this.props.authors.all.data.items.map((author, i) => 
            <div className="radio" key={i}>
                <label>
                    <input type="radio" value={author.sys.id} onChange={this.handleChange.bind(this, 'authorId')} checked={this.state.entry.authorId === author.sys.id || false} />
                    {author.fields.name}
                </label>
            </div>)
    }

    generateSlug(title) {
        let slug = title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
        const entry = this.state.entry
        entry.slug = slug
        this.setState( {entry: entry} )
    }

    render() {
        return (
            <div>
                <h4>
                    New Entry 
                </h4>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input 
                        className="form-control"
                        type="text" 
                        placeholder="Title" 
                        value={this.state.entry.title} 
                        onChange={this.handleChange.bind(this, 'title')} />
                    <input 
                        className="form-control"
                        type="text" 
                        placeholder="Slug - auto generated" 
                        value={this.state.entry.slug} 
                        onChange={this.handleChange.bind(this, 'slug')} />
                    <textarea 
                        className="form-control post-body"
                        type="text"
                        placeholder="new post...." 
                        value={this.state.entry.body} 
                        onChange={this.handleChange.bind(this, 'body')} />
                    <ul>
                        <h5>Select Author</h5>
                    {!this.props.authors.loading && this.props.authors.all.data !== undefined ? this.renderAuthors() : null}
                    </ul>
                    <input className="btn btn-default" type="submit" value="Submit" />
                </form>
                {this.props.postEntry.error ? <strong>error posting</strong> : null }
                {this.props.postEntry.newEntry.payload ? <button onClick={this.publishEntry}>publish</button> : null}
            </div>
        )
    }
}