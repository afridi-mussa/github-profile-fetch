import React from 'react'
import { useSelector } from 'react-redux'
import './ProfileCard.css'


export default function ProfileCard() {
const { profile, loading, error } = useSelector((state) => state.user)


if (loading) return <div className="profile-card">Loading profile...</div>
if (error) return <div className="profile-card error">{error}</div>
if (!profile) return <div className="profile-card muted">Search for a GitHub user to see profile</div>


return (
<div className="profile-card">
<div className="left">
<img src={profile.avatar_url} alt={profile.login} />
</div>
<div className="right">
<h2>{profile.name || profile.login}</h2>
<p className="bio">{profile.bio}</p>
<div className="meta">
<span>Followers: {profile.followers}</span>
<span>Following: {profile.following}</span>
<span>Repos: {profile.public_repos}</span>
</div>
<a href={profile.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
</div>
</div>
)
}