import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const githubApi = createApi({
reducerPath: 'githubApi',
baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
endpoints: (builder) => ({
getRepos: builder.query({
// returns repos array for user
query: (username) => `users/${username}/repos?per_page=100`,
// optional: sort or transform response
transformResponse: (response) => response.sort((a, b) => b.stargazers_count - a.stargazers_count),
}),
}),
})


export const { useGetReposQuery } = githubApi