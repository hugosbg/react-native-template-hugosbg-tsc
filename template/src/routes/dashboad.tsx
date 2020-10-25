import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screen from '~/pages';

const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator
      initialRouteName='Main'
      headerMode='screen'
      screenOptions={{
        headerShown: false
      }}>

      <MainStack.Screen
        name='Main'
        component={Screen.Main}
      />
    </MainStack.Navigator>
  );
}
