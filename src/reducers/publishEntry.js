import { PUBLISH_ENTRY_PENDING, PUBLISH_ENTRY_SUCCESS, PUBLISH_ENTRY_FAILURE } from '../actions/actionCreators'

function publishEntry(state={}, action) {
    switch(action.type) {
        case PUBLISH_ENTRY_PENDING:
            return { ...state, entry: {}, error: null, loading: true }
        case PUBLISH_ENTRY_SUCCESS:
            return { ...state, entry: action.payload, error: false, loading: false }
        case PUBLISH_ENTRY_FAILURE:
            return { ...state, entry: {}, errorMessage: action.payload, error: true, loading: false }
        default: 
            return state
    }
}

export default publishEntry