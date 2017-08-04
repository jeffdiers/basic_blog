import { connect } from 'react-redux'
import { 
    fetchEntriesPending, 
    fetchEntriesFailure, 
    fetchEntriesSuccess, 
    postEntryPending, 
    postEntryFailure, 
    postEntrySuccess,
    publishEntryPending,
    publishEntryFailure,
    publishEntrySuccess  } from '../actions/actionCreators'
import Main from './Main'

function mapStateToProps(state) {
    return {
        entries: state.entries,
        postEntry: state.postEntry,
        publishEntry: state.publishEntry
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchEntries: () => {
            dispatch(fetchEntriesPending()).then((response) => 
                response.error ? dispatch(fetchEntriesFailure(response)) : dispatch(fetchEntriesSuccess(response)) 
            )
        },

        createNewEntry: (newPost) => {
            dispatch(postEntryPending(newPost)).then((response) => 
                response.error ? dispatch(postEntryFailure(response)) : dispatch(postEntrySuccess(response)) )
        },

        publishEntry: (postId) => {
            dispatch(publishEntryPending(postId)).then((response) => 
                response.error ? dispatch(publishEntryFailure(response)) : dispatch(publishEntrySuccess(response)))
        }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
