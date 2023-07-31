import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FaceCamera from '../components/faceML';
import { HomeScreen } from '../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name="FaceCamera" component={FaceCamera} />
    </Stack.Navigator>
  );
};
