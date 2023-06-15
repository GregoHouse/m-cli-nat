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
import { Start } from './screens/Start';
import { Register } from './screens/Register';
import { ResetPasswordOne } from './screens/ResetPasswordOne';


export default function App() {

  return (
    <SafeAreaView >
      <View>
        <Provider store={store}>
          <AuthProvider>
            <UserProvider>
              <NavigationContainer>
                {/* <Login /> */}
                {/* <Start/> */}
                {/* <Register/> */}
                <ResetPasswordOne/>
              </NavigationContainer>
            </UserProvider>
          </AuthProvider>
        </Provider>
      </View>
    </SafeAreaView>
  );
}




