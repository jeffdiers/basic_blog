import { FETCH_ENTRIES } from '../actions/actionCreators'

function entries(state={}, action) {
    switch(action.type) {
        case FETCH_ENTRIES :
            return { ...state, all: action.payload, loading: false }
        default : 
            return state
    }
}

export default entries