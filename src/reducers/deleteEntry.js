import { DELETE_ENTRY_PENDING, DELETE_ENTRY_SUCCESS, DELETE_ENTRY_FAILURE } from '../actions/actionCreators'

function deletedEntry(state={}, action) {
    switch(action.type) {
        case DELETE_ENTRY_PENDING:
            return { ...state, entry: {}, error: null, loading: true }
        case DELETE_ENTRY_SUCCESS:
            return { ...state, entry: action.payload, error: null, loading: false }
        case DELETE_ENTRY_FAILURE:
            return { ...state, entry: {}, error: action.payload, loading: false }
        default: 
            return state
    }
}

export default deletedEntry