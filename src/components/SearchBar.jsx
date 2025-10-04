import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../store/userReducer'
import './SearchBar.css'


export default function SearchBar() {
const [username, setUsername] = useState('')
const dispatch = useDispatch()


const handleSubmit = (e) => {
e.preventDefault()
if (!username.trim()) return
// dispatch thunk to fetch profile
dispatch(fetchUser(username.trim()))
setUsername('')
}


return (
<form className="searchbar" onSubmit={handleSubmit}>
<input
value={username}
onChange={(e) => setUsername(e.target.value)}
placeholder="Enter GitHub username (e.g. torvalds)"
/>
<button type="submit">Search</button>
</form>
)
}