import { UNPUBLISH_ENTRY_PENDING, UNPUBLISH_ENTRY_SUCCESS, UNPUBLISH_ENTRY_FAILURE } from '../actions/actionCreators'

function unpublishedEntry(state={}, action) {
    switch(action.type) {
        case UNPUBLISH_ENTRY_PENDING:
            return { ...state, success: null, error: null, loading: true }
        case UNPUBLISH_ENTRY_SUCCESS:
            return { ...state, success: action.payload, error: null, loading: false }
        case UNPUBLISH_ENTRY_FAILURE:
            return { ...state, success: null, error: action.payload, loading: false }
        default: 
            return state
    }
}

export default unpublishedEntry