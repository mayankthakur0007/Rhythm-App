/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Login from './src/auth/login';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
      <Login />
    </SafeAreaView>
  );
}

export default App;
