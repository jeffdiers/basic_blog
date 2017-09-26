import { FETCH_ENTRIES_PENDING, FETCH_ENTRIES_SUCCESS, FETCH_ENTRIES_FAILURE } from '../actions/actionCreators'

function entries(state={}, action) {
    switch(action.type) {
        case FETCH_ENTRIES_PENDING:
            return { ...state, all: {}, loading: true }
        case FETCH_ENTRIES_SUCCESS:
            return { ...state, all: action.payload.payload, loading: false }
        case FETCH_ENTRIES_FAILURE:
            return { ...state, all: {}, errorMessage: action.payload.payload, error: true, loading: false }
        default : 
            return state
    }
}

export default entries