import { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

const UserResults = () => {
  // From context:
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
