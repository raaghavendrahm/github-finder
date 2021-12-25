import axios from 'axios';
// Using axios cleans the file nicely. However, it is optional.

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Search Users
export const searchUsers = async (text) => {
  // Create variable for url parameters for search to make URL look clean:
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`); // note that axios directly gives json data. So, need not do response.json() additionally as done with fetch API.

  return response.data.items;
};

// With axios, getUser and getUserRepos functions are made one function:

// Get user and repos:
export const getUserAndRepos = async (login) => {
  // As there are two different requests for getting user and getting repos, promise.all() is used and passed in array:
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
