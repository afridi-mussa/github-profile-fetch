import React from 'react'
import SearchBar from '../components/SearchBar'
import ProfileCard from '../components/ProfileCard'
import RepoList from '../components/RepoList'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="left-col">
        <SearchBar />
        <ProfileCard />
      </div>
      <div className="right-col">
        <RepoList />
      </div>
    </div>
  )
}
