import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {Icon} from 'react-native-elements';

import {Image} from 'react-native';

import {Home, SearchScreen, Inbox} from '../screens';

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tab
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="List"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-sharp" type="ionicon" color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Discover',
          tabBarIcon: ({color, size}) => (
            <Icon name="search-sharp" type="ionicon" color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="upload"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icon.png')}
              style={{width: 70, height: 46, marginTop: 18}}
              resizeMode={'contain'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="inbox"
        component={Inbox}
        options={{
          headerShown: false,
          tabBarLabel: 'Inbox',
          tabBarIcon: ({color, size}) => (
            <Icon name="chatbox-sharp" type="ionicon" color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Me',
          tabBarIcon: ({color, size}) => (
            <Icon name="person-sharp" type="ionicon" color="#fff" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
