import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'


export default function App() {
return (
<div className="app-root">
<Navbar />
<main className="container">
<Home />
</main>
</div>
)
}