import axios from 'axios'
// import store from '../store'

export const FETCH_ENTRIES_PENDING = 'FETCH_ENTRIES_PENDING'
export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS'
export const FETCH_ENTRIES_FAILURE = 'FETCH_ENTRIES_FAILURE'

export const POST_ENTRY_PENDING = 'POST_ENTRY_PENDING'
export const POST_ENTRY_SUCCESS = 'POST_ENTRY_SUCCESS'
export const POST_ENTRY_FAILURE = 'POST_ENTRY_FAILURE'

export const PUBLISH_ENTRY_PENDING = 'PUBLISH_ENTRY_PENDING'
export const PUBLISH_ENTRY_SUCCESS = 'PUBLISH_ENTRY_SUCCESS'
export const PUBLISH_ENTRY_FAILURE = 'PUBLISH_ENTRY_FAILURE'

const url = 'https://cdn.contentful.com/spaces/swjua9srmzrm/entries?access_token=0038cf22f94e5f8b65b2946f51561aee43424e3c17b466ce61d259baf6d23b98&content_type=2wKn6yEnZewu2SCCkus4as'
const postUrl = 'https://api.contentful.com/spaces/swjua9srmzrm/entries?access_token=CFPAT-725abbf1c35947231ff2f567a488ff8d0e126f905503dbcc9929763ff1f6a29b'

export function fetchEntriesPending() {
    const response = axios.get(url)
    return {
        type: FETCH_ENTRIES_PENDING,
        payload: response
    }
}

export function fetchEntriesSuccess(posts) {
    return {
        type: FETCH_ENTRIES_SUCCESS,
        payload: posts
    }
}

export function fetchEntriesFailure(error) {
    return {
        type: FETCH_ENTRIES_FAILURE,
        payload: error
    }
}

// NEW ENTRY
export function postEntryPending(entry) {
    const response = axios({
        method: 'post',
        url: postUrl,
        headers: {'X-Contentful-Content-Type': '2wKn6yEnZewu2SCCkus4as'},
        data: {
            "fields": {
                "title": {
                "en-US": entry.title
                },
                "body": {
                "en-US": entry.body
                }
            }
        }
    })
    return {
        type: POST_ENTRY_PENDING,
        payload: response
    }
}

export function postEntrySuccess(newPost) {
    return {
        type: POST_ENTRY_SUCCESS,
        payload: newPost
    }
}

export function postEntryFailure(error) {
    return {
        type: POST_ENTRY_FAILURE,
        payload: error
    }
}

// PUBLISH ENTRY
export function publishEntryPending(entryId) {
    const response = axios({
        method: 'put',
        url: 'https://api.contentful.com/spaces/swjua9srmzrm/entries/'+entryId+'/published?access_token=CFPAT-725abbf1c35947231ff2f567a488ff8d0e126f905503dbcc9929763ff1f6a29b',
        headers: {'X-Contentful-Version': 1},
    })
    return {
        type: PUBLISH_ENTRY_PENDING,
        payload: response
    }
}

export function publishEntrySuccess(newPost) {
    return {
        type: PUBLISH_ENTRY_SUCCESS,
        payload: newPost
    }
}

export function publishEntryFailure(error) {
    return {
        type: PUBLISH_ENTRY_FAILURE,
        payload: error
    }
}