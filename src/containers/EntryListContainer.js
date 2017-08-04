import { connect } from 'react-redux'
// import * as actionCreators from '../actions/actionCreators'
import { fetchEntries } from '../actions/actionCreators'
import EntryList from '../components/EntryList'

function mapStateToProps(state) {
    return {
        entries: state.entries
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchEntries: () => {
            dispatch(fetchEntries()).then((response) => console.log('fetchin'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryList)
