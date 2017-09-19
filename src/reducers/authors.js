import { FETCH_AUTHORS_PENDING, FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_FAILURE } from '../actions/actionCreators'

function authors(state={}, action) {
    switch(action.type) {
        case FETCH_AUTHORS_PENDING:
            return { ...state, all: {}, error: null, loading: true }
        case FETCH_AUTHORS_SUCCESS:
            return { ...state, all: action.payload.payload, error: null, loading: false }
        case FETCH_AUTHORS_FAILURE:
            return { ...state, all: {}, error: action.payload.payload, loading: false }
        default : 
            return state
    }
}

export default authors