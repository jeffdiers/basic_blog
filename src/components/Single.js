import React, { Component } from 'react'
import marked from 'marked'

export default class Single extends Component{
    componentWillMount() {
        this.props.fetchEntries()
    }

    render() {
        const { entrySlug } = this.props.params

        const entry = this.props.entries.loading ? null : 
            this.props.entries.all.data.items.filter((entry) => 
                entry.fields.slug === entrySlug
            )

        const author = this.props.entries.loading ? null : 
            this.props.entries.all.data.includes.Entry.filter((author) => 
                author.sys.id === entry[0].fields.author[0].sys.id
            )

        function renderMarkdown(content) {
            return {
                __html: marked(content, {sanitize: true})
            }
        }

        return (
            this.props.entries.loading ? <div>loading...</div> :
            <div>
                <p>{entry[0].fields.title} by: {author[0].fields.name}</p>
                <p dangerouslySetInnerHTML={renderMarkdown(entry[0].fields.body)} />
            </div>
        )
    }
}