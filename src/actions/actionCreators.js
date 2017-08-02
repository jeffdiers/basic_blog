import axios from 'axios'
// import store from '../store'

export const FETCH_ENTRIES = 'FETCH_ENTRIES'

// const url = 'https://cdn.contentful.com/spaces/swjua9srmzrm/entries?access_token=0038cf22f94e5f8b65b2946f51561aee43424e3c17b466ce61d259baf6d23b98&content_type=2wKn6yEnZewu2SCCkus4as'

const url = 'https://cdn.contentful.com/spaces/swjua9srmzrm/entries?access_token=0038cf22f94e5f8b65b2946f51561aee43424e3c17b466ce61d259baf6d23b98&content_type=2wKn6yEnZewu2SCCkus4as'

export function fetchEntries() {
    const response = axios.get(url)
    return {
        type: FETCH_ENTRIES,
        payload: response
    }
}

//increment the likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}