import { FETCH_ENTRIES_PENDING, FETCH_ENTRIES_SUCCESS, FETCH_ENTRIES_FAILURE } from '../actions/actionCreators'

function entries(state={}, action) {
    switch(action.type) {
        case FETCH_ENTRIES_PENDING:
            return { ...state, all: {}, error: null, loading: true }
        case FETCH_ENTRIES_SUCCESS:
            return { ...state, all: action.payload.payload, error: null, loading: false }
        case FETCH_ENTRIES_FAILURE:
            return { ...state, all: {}, error: action.payload.payload, loading: false }
        default : 
            return state
    }
}

export default entries