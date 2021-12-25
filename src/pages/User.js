import { useEffect } from 'react';
import { useContext } from 'react';
import GithubContext, { GithubProvider } from '../context/github/GithubContext';
import { useParams } from 'react-router';

const User = () => {
  // From Context:
  const { user, getUser } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    // getUserRepos comes next here.
  }, []);
  return <div>User</div>;
};

export default User;
