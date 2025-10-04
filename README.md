🚀 GitHub Profile Finder — Async State Management (Redux Thunk + RTK Query)

🎯 Live Demo: https://github-profile-finder-demo.netlify.app/

(Replace with your actual deployed link when you upload to Netlify or Vercel)

📘 Project Overview

This project is a React.js-based GitHub Profile Finder App that demonstrates advanced async state management using Redux Thunk and RTK Query.
It allows users to search any GitHub username and instantly view their profile information and public repositories, fetched in real-time from the GitHub REST API.

🧩 Core Features
🔍 1. Search GitHub Profiles

Users can enter any GitHub username in the SearchBar.

The app fetches and displays real data from the GitHub Users API
.

Includes loading and error handling states.

👤 2. Display User Profile (Redux Thunk)

Uses Redux Thunk to handle async actions for fetching profile details.

Shows:

Avatar

Name, Username, Bio

Followers & Following

Public Repositories count

Location and profile link

Redux handles all data and loading/error states globally.

📦 3. Display Repositories (RTK Query)

Uses RTK Query for efficient data fetching, caching, and state synchronization.

Fetches from GitHub Repos API
.

Displays:

Repository name

Description

Stars & Forks count

Repo URL

RTK Query automatically caches results for performance and avoids duplicate API calls.

💡 4. Responsive and Professional UI

Modern, clean two-column layout:

Left column: Search bar + profile info

Right column: Repository list

Styled using CSS modules for better modularity.

Responsive on all screen sizes (desktop, tablet, mobile).

🧱 Project Structure
src/
│
├── app/
│   └── store.js                  # Redux store setup
│
├── features/
│   ├── userSlice.js              # Redux Thunk logic for profile data
│   └── githubApi.js              # RTK Query slice for repos
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── SearchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   ├── ProfileCard/
│   │   ├── ProfileCard.jsx
│   │   └── ProfileCard.css
│   └── RepoList/
│       ├── RepoList.jsx
│       └── RepoList.css
│
├── pages/
│   ├── Home.jsx
│   └── Home.css
│
├── App.jsx
└── index.js

⚙️ Technologies Used
Category	Technology
Frontend	React.js (Vite)
State Management	Redux Toolkit, Redux Thunk, RTK Query
Styling	CSS
API	GitHub REST API
Deployment	Netlify / Vercel
🧠 Learning Objectives

By completing this project, you will:

Understand async state management in React.

Learn to implement Redux Thunk for manual async logic.

Learn to use RTK Query for automatic caching and data fetching.

Integrate real-world REST APIs efficiently.

Build a professional front-end architecture with reusable components.

🖥️ Installation & Setup
# Clone the repository
git clone https://github.com/your-username/github-profile-finder.git

# Move into the project directory
cd github-profile-finder

# Install dependencies
npm install

# Start development server
npm run dev


Then open your browser and go to 👉 http://localhost:5173

🔗 GitHub API Endpoints Used
Data	Endpoint
User Profile	https://api.github.com/users/{username}
User Repositories	https://api.github.com/users/{username}/repos
🧠 Example Usernames for Testing

Try searching:

torvalds (Creator of Linux)

gaearon (React Core Team)

mussaafridi ( https://github.com/afridi-mussa/ )
