import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Link } from 'react-router'
import moment from 'moment'

export default class EntryList extends Component{
    componentWillMount() {
        this.props.fetchEntries()
    }

    deleteEntry(entryId, event) {
        this.props.unpublishEntry(entryId)
        // this.props.entries.all.data.items.filter((entry) => entry.sys.id !== entryId)
        event.preventDefault()
    }

    renderList() {
        return (
            this.props.entries.all.data.items.map((entry, i) => 
                    <ListGroupItem key={i} className="justify-content-between" tag={Link} to={`/entry/${entry.fields.slug}`} href="#">
                        {entry.fields.title}
                        <Badge className="label label-info date pull-right">{moment(entry.fields.date).format('ll')}</Badge>
                    </ListGroupItem>
                )
        )
    }

    render() {
        return (
            <div>
                <div className="list-group">
                {this.props.entries.loading ? null :
                    this.props.entries.error ? <div>Cannot load entries</div> :
                        <ListGroup>
                            {this.renderList()}
                        </ListGroup>
                }
                </div>
            </div>
        )
    }
}

// export default class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         <h3>Anchors </h3>
//         <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
//         <ListGroup>
//           <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
//           <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
//           <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
//           <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
//           <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
//         </ListGroup>
//         <p />
//         <h3>Buttons </h3>
//         <ListGroup>
//           <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
//           <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
//           <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
//           <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
//           <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
//         </ListGroup>
//       </div>
//     );
//   }
// }