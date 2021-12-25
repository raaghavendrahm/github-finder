const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Search Users
export const searchUsers = async (text) => {
  // Create variable for url parameters for search to make URL look clean:
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const { items } = await response.json(); // "data" is an object which has "items" object inside it that has users data. So, it is destructured as {items}, else it could be used as "data.items".

  return items;
};

// Get Single User
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  // If login detail is invalid, show 404. Else, show the user profile:
  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();
    return data;
  }
};

// Get user repos
export const getUserRepos = async (login) => {
  // Create variable for url parameters for getting latest 10 public repos to make URL look clean:
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const data = await response.json();
  return data;
};
