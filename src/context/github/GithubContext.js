import { createContext } from 'react';
import { useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        // Spread operator can replace the followin lines of code for state:
        /* users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos, */
        dispatch,

        // So, only state and dispatch are passed through Provider.
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
