import React, { Component } from 'react'
import marked from 'marked'

export default class Single extends Component{
    render() {
        const { entrySlug } = this.props.params
        const entry = this.props.entries.filter((entry) => entry.slug === entrySlug)

        function renderMarkdown(content) {
            return {
                __html: marked(content, {sanitize: true})
            }
        }
        return (
            <div>
                <p>{entry[0].title} by: {entry[0].author}</p>
                <p dangerouslySetInnerHTML={renderMarkdown(entry[0].body)} />
            </div>
        )
    }
}