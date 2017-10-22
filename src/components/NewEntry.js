import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { ReactMde, ReactMdeCommands } from 'react-mde'

import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

import {
    Editor,
    createEditorState,
  } from 'medium-draft';


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
            },
            mdeValue: {
                text: "", 
                selection: null
            },
            editorState: createEditorState(),
            content: 'Example text'
        }
        this.handleModelChange = this.handleModelChange.bind(this);
        

    this.editorOnChange = (editorState) => {
        const entry = this.state.entry
        entry.body = editorState
        this.setState({ entry })
        this.setState({ editorState });
      };

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

    handleModelChange(content) {
        this.setState({
            content: content
        });
      }
    
    handleValueChange(value) {
        // this.setState({mdeValue: value})
        const entry = this.state.entry
        entry.body = value.text
        this.setState({
            mdeValue: value,
            entry: entry
        })
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
        this.props.publishNewEntry(this.props.postEntry.newEntry.payload.data.sys.id)
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
        let commands = ReactMdeCommands.getDefaultCommands()
        const { editorState } = this.state;        
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
                <ReactMde
                    textareaId="ta1"
                    textareaName="ta1"
                    value={this.state.mdeValue}
                    onChange={this.handleValueChange.bind(this)}
                    commands={commands}
                     />

                    {/* <Editor
                        ref="editor"
                        editorState={editorState}
                        onChange={this.editorOnChange} /> */}
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                            {this.props.postEntry.error ? <strong>error posting</strong> : 
                                this.props.postEntry.newEntry.payload ? <Button onClick={this.publishEntry}>publish</Button> : null }
                            {this.props.publishEntry.error ? <strong>error posting</strong> : 
                                this.props.publishEntry.newEntry.payload ? <strong>success</strong> : null }
                        </Col>
                    </FormGroup>
                    {/*{!this.props.authors.loading && this.props.authors.all.data !== undefined ? this.renderAuthors() : null}*/}
                </Form>
            </div>
        )
    }
}

