import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Login from '../new-screens/Login';
import Signup from '../new-screens/Signup';
import ProfileInformation from '../new-screens/profileInformation';

export default function TabNavigation(){
    const Tab=createBottomTabNavigator()
    return(
        // <NavigationContainer> //when using nesting navigators use only one NavigationContainer at root
            <Tab.Navigator screenOptions={{headerShown:false}} >
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Signup" component={Signup} />
                <Tab.Screen name="ProfileInformation" component={ProfileInformation} />
            </Tab.Navigator>
        // </NavigationContainer>
    )
}