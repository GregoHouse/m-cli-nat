/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  View
} from 'react-native';

import { Login } from './screens/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { AuthNavigator } from './stackNavigation/AuthNavigator';


export default function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <UserProvider>
          <NavigationContainer>
            <AuthNavigator />
          </NavigationContainer>
        </UserProvider>
      </AuthProvider>
    </Provider>
  );
}




