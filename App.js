import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './components/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
