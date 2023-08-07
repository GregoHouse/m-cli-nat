import React, { createContext, useReducer } from 'react';
import { authReducer } from './AuthReducer';

// Estado Inicial del Context;
export const authInitialState = {
  isLoggedIn: false,
  username: undefined,
  profileFriendSelected: undefined,
};

// Crear el context
export const AuthContextWithReducer = createContext();

// Componente proveedor del estado
export const AuthProviderWithReducer = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const showFriendProfile = (userName) => {
    dispatch({ type: 'showFriendProfile', payload: userName });
  };
  return (
    <AuthContextWithReducer.Provider
      value={{
        authState,
        signIn,
        logout,
        showFriendProfile,
      }}>
      {children}
    </AuthContextWithReducer.Provider>
  );
};
