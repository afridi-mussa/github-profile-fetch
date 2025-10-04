// Simple reducer + classic thunk (async action creator)


const initialState = {
profile: null,
loading: false,
error: null,
}


// action types
const FETCH_USER_START = 'user/fetchStart'
const FETCH_USER_SUCCESS = 'user/fetchSuccess'
const FETCH_USER_FAILURE = 'user/fetchFailure'


// reducer
export default function userReducer(state = initialState, action) {
switch (action.type) {
case FETCH_USER_START:
return { ...state, loading: true, error: null }
case FETCH_USER_SUCCESS:
return { ...state, loading: false, profile: action.payload }
case FETCH_USER_FAILURE:
return { ...state, loading: false, error: action.payload }
default:
return state
}
}


// thunk action creator (classic redux-thunk style)
export const fetchUser = (username) => async (dispatch) => {
if (!username) return
dispatch({ type: FETCH_USER_START })
try {
const res = await fetch(`https://api.github.com/users/${username}`)
if (!res.ok) {
// GitHub returns 404 for not found
const errText = `Error ${res.status} - ${res.statusText}`
throw new Error(errText)
}
const data = await res.json()
dispatch({ type: FETCH_USER_SUCCESS, payload: data })
} catch (err) {
dispatch({ type: FETCH_USER_FAILURE, payload: err.message })
}
}