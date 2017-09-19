import { POST_ENTRY_PENDING, POST_ENTRY_SUCCESS, POST_ENTRY_FAILURE, RESET_NEW_ENTRY } from '../actions/actionCreators'

function postEntry(state={}, action) {
    switch(action.type) {
        case POST_ENTRY_PENDING:
            return { ...state, newEntry: {}, error: null, loading: true }
        case POST_ENTRY_SUCCESS:
            return { ...state, newEntry: action.payload, error: null, loading: false }
        case POST_ENTRY_FAILURE:
            return { ...state, newEntry: {}, error: action.payload, loading: false }
        case RESET_NEW_ENTRY:
            return { ...state, newEntry: {}, error: null, loading: false}
        default: 
            return state
    }
}

export default postEntry