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
    publishEntrySuccess,
    fetchAuthorsPending,
    fetchAuthorsFailure,
    fetchAuthorsSuccess,
    deleteEntryPending, 
    deleteEntryFailure, 
    deleteEntrySuccess,
    unpublishEntryPending, 
    unpublishEntryFailure, 
    unpublishEntrySuccess,  
    resetNewEntry  } from '../actions/actionCreators'
import Main from './Main'

function mapStateToProps(state) {
    return {
        entries: state.entries,
        postEntry: state.postEntry,
        publishEntry: state.publishEntry,
        authors: state.authors,
        unpublishedEntry: state.unpublishedEntry,
        deletedEntry: state.deletedEntry
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
        },

        fetchAuthors: () => {
            dispatch(fetchAuthorsPending()).then((response) => 
                response.error ? dispatch(fetchAuthorsFailure(response)) : dispatch(fetchAuthorsSuccess(response)))
        },

        resetNewEntry: () => {
            dispatch(resetNewEntry())
        },

        unpublishEntry: (entryId) => {
            dispatch(unpublishEntryPending(entryId)).then((response) => 
                response.error ? dispatch(unpublishEntryFailure(response)) : dispatch(unpublishEntrySuccess(response)))
        },

        deleteEntry: (entryId) => {
            console.log(entryId)
            dispatch(deleteEntryPending(entryId)).then((response) => 
                response.error ? dispatch(deleteEntryFailure(response)) : dispatch(deleteEntrySuccess(response)))
        }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
