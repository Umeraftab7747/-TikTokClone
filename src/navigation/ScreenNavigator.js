import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// import {Home} from '../screens/Home';
import {TabNavigator} from './TabNavigator';
import {SplashScree} from '../screens';

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScree"
          component={SplashScree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
