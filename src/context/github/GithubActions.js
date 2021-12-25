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
