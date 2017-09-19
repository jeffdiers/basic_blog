import axios from 'axios'

export const FETCH_ENTRIES_PENDING = 'FETCH_ENTRIES_PENDING'
export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS'
export const FETCH_ENTRIES_FAILURE = 'FETCH_ENTRIES_FAILURE'

export const FETCH_AUTHORS_PENDING = 'FETCH_AUTHORS_PENDING'
export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS'
export const FETCH_AUTHORS_FAILURE = 'FETCH_AUTHORS_FAILURE'

export const POST_ENTRY_PENDING = 'POST_ENTRY_PENDING'
export const POST_ENTRY_SUCCESS = 'POST_ENTRY_SUCCESS'
export const POST_ENTRY_FAILURE = 'POST_ENTRY_FAILURE'
export const RESET_NEW_ENTRY = 'RESET_NEW_ENTRY'

export const PUBLISH_ENTRY_PENDING = 'PUBLISH_ENTRY_PENDING'
export const PUBLISH_ENTRY_SUCCESS = 'PUBLISH_ENTRY_SUCCESS'
export const PUBLISH_ENTRY_FAILURE = 'PUBLISH_ENTRY_FAILURE'

export const UNPUBLISH_ENTRY_PENDING = 'UNPUBLISH_ENTRY_PENDING'
export const UNPUBLISH_ENTRY_SUCCESS = 'UNPUBLISH_ENTRY_SUCCESS'
export const UNPUBLISH_ENTRY_FAILURE = 'UNPUBLISH_ENTRY_FAILURE'

export const DELETE_ENTRY_PENDING = 'DELETE_ENTRY_PENDING'
export const DELETE_ENTRY_SUCCESS = 'DELETE_ENTRY_SUCCESS'
export const DELETE_ENTRY_FAILURE = 'DELETE_ENTRY_FAILURE'

const space = process.env.REACT_APP_SPACE_ID
const management_api_token = process.env.REACT_APP_MANAGEMENT_API_TOKEN
const delivery_api_token = process.env.REACT_APP_DELIVERY_API_TOKEN

const management_url = 'https://api.contentful.com/spaces/' + space  // read/write
const delivery_url = 'https://cdn.contentful.com/spaces/' + space  // read only

const content_type_post = '&content_type=2wKn6yEnZewu2SCCkus4as'
const content_type_author = '&content_type=1kUEViTN4EmGiEaaeC6ouY'

export function fetchEntriesPending() {
    const response = axios.get(delivery_url + '/entries?access_token=' + delivery_api_token + content_type_post + '&order=-sys.createdAt')
    
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

// GET AUTHORS
export function fetchAuthorsPending() {
    const response = axios.get(delivery_url + '/entries?access_token=' + delivery_api_token + content_type_author)
    return {
        type: FETCH_AUTHORS_PENDING,
        payload: response
    }
}

export function fetchAuthorsSuccess(authors) {
    return {
        type: FETCH_AUTHORS_SUCCESS,
        payload: authors
    }
}

export function fetchAuthorsFailure(error) {
    return {
        type: FETCH_AUTHORS_FAILURE,
        payload: error
    }
}

// NEW ENTRY
export function postEntryPending(entry) {
    const response = axios({
        method: 'post',
        url: management_url + '/entries?access_token=' + management_api_token,
        headers: {'X-Contentful-Content-Type': '2wKn6yEnZewu2SCCkus4as'},
        data: {
            "fields": {
                "title": {
                    "en-US": entry.title
                },
                "body": {
                    "en-US": entry.body
                },
                "slug": {
                    "en-US": entry.slug
                },
                "date": {
                    "en-US": entry.date
                },
                "author": {
                    "en-US": [
                        {
                            "sys": {
                                "id": entry.authorId,
                                "linkType": "Entry",
                                "type": "Link"
                            }
                        }
                    ]
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

export function resetNewEntry() {
    return {
        type: RESET_NEW_ENTRY,
        payload: null
    }
}

// PUBLISH ENTRY
export function publishEntryPending(entryId) {
    const response = axios({
        method: 'put',
        url: management_url + '/entries/' + entryId + '/published?access_token=' + management_api_token,
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

// UNPUBLISH POST
export function unpublishEntryPending(entryId) {
    const response = axios({
        method: 'delete',
        url: management_url + '/entries/' + entryId + '/published?access_token=' + management_api_token,
    })    
    return {
        type: UNPUBLISH_ENTRY_PENDING,
        payload: response
    }
}

export function unpublishEntrySuccess(post) {
    return {
        type: UNPUBLISH_ENTRY_SUCCESS,
        payload: post
    }
}

export function unpublishEntryFailure(error) {
    return {
        type: UNPUBLISH_ENTRY_FAILURE,
        payload: error
    }
}

// DELETE POST
export function deleteEntryPending(entryId) {
    const response = axios.delete(management_url + '/entries/' + entryId + '?access_token=' + management_api_token)
    return {
        type: DELETE_ENTRY_PENDING,
        payload: response
    }
}

export function deleteEntrySuccess(post) {
    return {
        type: DELETE_ENTRY_SUCCESS,
        payload: post
    }
}

export function deleteEntryFailure(error) {
    return {
        type: DELETE_ENTRY_FAILURE,
        payload: error
    }
}