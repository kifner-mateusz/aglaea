import React, { useReducer } from 'react';
import useHttp from '../hooks/useHttp';

const UserContext = React.createContext({
  id: '',
  login: '',
  token: '',
  axiosConfig: {},
  host: 'https://shop-json-test-api.herokuapp.com/'
});

const userReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return state;
    case 'logout':
      return state;
    case 'load':
      return state;
    default:
      throw new Error('UserReducer: action.type unknown');
  }
};

const UserContextProvider = props => {
  const [sendRequest, loading, resData] = useHttp();
  const [user, userDispatch] = useReducer(userReducer, {
    id: '',
    login: '',
    token: ''
  });

  return (
    <UserContext.Provider
      value={{
        id: user.id,
        login: user.login,
        token: user.token,
        axiosConfig: {},
        host: 'https://shop-json-test-api.herokuapp.com/'
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
