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


export default function App(){

  return (
    <SafeAreaView >
      <View>
        <Provider store={store}>
        <NavigationContainer>
          <Login/>  
        </NavigationContainer>
        </Provider>
      </View>
    </SafeAreaView>
  );
}




