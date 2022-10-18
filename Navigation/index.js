import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from '../new-screens/splash/index';
import Onboarding from '../new-screens/onboarding';
import PortalScreen from '../new-screens/portal';
import Login from '../new-screens/Login';
import Signup from '../new-screens/Signup';
import ProfileInformation from '../new-screens/profileInformation';

const Navigation = props => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="PortalScreen"
          component={PortalScreen}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
          <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="ProfileInformation"
          component={ProfileInformation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
