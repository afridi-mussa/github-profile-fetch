import React from 'react'
import { useSelector } from 'react-redux'
import { useGetReposQuery } from '../api/githubApi'
import './RepoList.css'


export default function RepoList() {
const username = useSelector((s) => s.user.profile?.login)
// skip querying until username exists
const { data: repos, error, isLoading, isFetching } = useGetReposQuery(username, { skip: !username })


if (!username) return <div className="repos">Search a user to see repositories.</div>
if (isLoading) return <div className="repos">Loading repos...</div>
if (error) return <div className="repos error">Could not load repos</div>


return (
<div className="repos">
<h3>Repositories ({repos?.length || 0})</h3>
<div className="repo-grid">
{repos && repos.map((r) => (
<a className="repo" key={r.id} href={r.html_url} target="_blank" rel="noreferrer">
<h4>{r.name}</h4>
<p>{r.description}</p>
<div className="repo-meta">⭐ {r.stargazers_count} • {r.language || '—'}</div>
</a>
))}
</div>
</div>
)
}