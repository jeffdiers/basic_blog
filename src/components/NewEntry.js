import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class NewEntry extends Component{
    constructor(props) {
        super(props)
        this.state = {
            entry: {
                title: '',
                body: '',
                slug: '',
                authorId: '6NlkGtfz9uC646WUqa0ca0',
                date: new Date()
            }
        }
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
        this.generateSlug(this.state.entry.title)
        let slug = this.state.entry.slug
        this.props.entries.all.data.items.filter((entry) => entry.fields.slug === slug).length === 1 ? alert("enter unique slug") : this.props.createNewEntry(this.state.entry)
        event.preventDefault()
    }

    publishEntry(event) {
        this.props.publishEntry(this.props.postEntry.newEntry.payload.data.sys.id)
                        console.log(this.props.publishEntry.entry)

        event.preventDefault()
    }

    renderAuthors() {
        console.log(this.props.authors.all.data.items)
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
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="title" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input type="text" name="title" id="title" value={this.state.entry.title} onChange={this.handleChange.bind(this, 'title')} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="body" sm={2}>Entry</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="body" id="body" value={this.state.entry.body} onChange={this.handleChange.bind(this, 'body')} />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                            {this.props.postEntry.error ? <strong>error posting</strong> : 
                                this.props.postEntry.newEntry.payload ? <Button onClick={this.publishEntry}>publish</Button> : null }
                        </Col>
                    </FormGroup>
                    {/*{!this.props.authors.loading && this.props.authors.all.data !== undefined ? this.renderAuthors() : null}*/}
                </Form>
            </div>
        )
    }
}

