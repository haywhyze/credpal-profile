import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateProfile from './CreateProfile';
import EditProfile from './EditProfile';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Create">
      <Stack.Screen name="Create" component={CreateProfile} />
      <Stack.Screen name="Edit" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
