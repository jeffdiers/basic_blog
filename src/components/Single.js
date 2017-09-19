import React, { Component } from 'react'
import marked from 'marked'

export default class Single extends Component{
    componentWillMount() {
        this.props.fetchEntries()
    }

    render() {
        const { entrySlug } = this.props.params

        const entry = !this.props.entries.loading && this.props.entries.all.data !== undefined ? 
            this.props.entries.all.data.items.filter((entry) => 
                entry.fields.slug === entrySlug
            ) : null

        const author = !this.props.entries.loading && this.props.entries.all.data !== undefined ? 
            (entry[0] === undefined ? null : 
                this.props.entries.all.data.includes.Entry.filter((author) => 
                    author.sys.id === entry[0].fields.author[0].sys.id
                ) 
            ) : null

        function renderMarkdown(content) {
            return {
                __html: marked(content, {sanitize: true})
            }
        }
         
        return (
            !this.props.entries.loading && this.props.entries.all.data !== undefined ?
                (entry[0] === undefined ? <div>no entry. turn back.</div> :
                    <div>
                        <h1>{entry[0].fields.title}</h1>
                        <p>by: {author[0].fields.name}</p>
                        <p dangerouslySetInnerHTML={renderMarkdown(entry[0].fields.body)} />
                    </div>
                ) : <strong>loading...</strong>
        )
    }
}