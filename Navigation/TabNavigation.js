import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';

import Login from '../new-screens/Login';
import Signup from '../new-screens/Signup';
import ProfileInformation from '../new-screens/profileInformation';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    // <NavigationContainer> //when using nesting navigators use only one NavigationContainer at root
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Login') {
            iconName = focused ? 'login' : 'login';
          } else if (route.name === 'Signup') {
            iconName = focused ? 'app-registration' : 'app-registration';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }

          // You can return any component that you like here!
          return (
            <Icon
              type="MaterialIcons"
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{tabBarShowLabel: true}}
      />
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="Profile" component={ProfileInformation} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
