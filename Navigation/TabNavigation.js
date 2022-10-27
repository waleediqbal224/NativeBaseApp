import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {TouchableOpacity, View, Image, Text} from 'react-native';

import Login from '../new-screens/Login';
import Signup from '../new-screens/Signup';
import ProfileInformation from '../new-screens/profileInformation';

import {colors} from '../variables/colors';
import Images from '../theme/Images';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// export default function TabNavigation(props) {
//   const Tab = createBottomTabNavigator();
//   return (
//     // <NavigationContainer> //when using nesting navigators use only one NavigationContainer at root
//     <Tab.Navigator
//       barStyle={{
//         backgroundColor: 'white',
//         borderWidth: 2,
//         position: 'absolute',
//         borderColor: colors.whiteColor,
//         height: 65,
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 12,
//         },
//         shadowOpacity: 0.58,
//         shadowRadius: 16.0,

//         elevation: 24,
//       }}
//       screenOptions={({route}) => ({
//         headerShown: false,
//         // tabBarIcon: ({focused, color, size}) => {
//         //   let iconName;

//         //   if (route.name === 'Login') {
//         //     iconName = focused ? 'login' : 'login';
//         //   } else if (route.name === 'Signup') {
//         //     iconName = focused ? 'app-registration' : 'app-registration';
//         //   } else if (route.name === 'Profile') {
//         //     iconName = focused ? 'person' : 'person';
//         //   }

//         //   // You can return any component that you like here!
//         //   return (
//         //     <Icon
//         //       type="MaterialIcons"
//         //       name={iconName}
//         //       size={size}
//         //       color={color}
//         //     />
//         //   );
//         // },

//         // tabBarActiveTintColor: 'tomato',
//         //tabBarInactiveTintColor: 'gray',
//       })}>
//       <Tab.Screen
//         name="Login"
//         component={Login}
//         options={{
//           //tabBarActiveBackgroundColor: 'red',
//           tabBarShowLabel: false,
//           tabBarLabel: 'Login',
//           tabBarIcon: ({focused}) => (
//             <TouchableOpacity
//               onPress={() => props.navigation.navigate('Login')}>
//               {focused ? (
//                 <View
//                   style={{
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginTop: 7,
//                   }}>
//                   <Image
//                     style={{height: 20, width: 20, marginBottom: 10}}
//                     source={require('../assets/homeNew.png')}
//                   />
//                   <Text
//                     style={{
//                       fontSize: 10,
//                       width: wp('8%'),
//                       marginLeft: 5,
//                       color: colors.differentPink,
//                     }}>
//                     Login
//                   </Text>
//                 </View>
//               ) : (
//                 <View style={{justifyContent: 'center', alignItems: 'center'}}>
//                   <Image
//                     style={{
//                       height: 20,
//                       width: 20,
//                       marginBottom: 10,
//                     }}
//                     source={require('../assets/homeNew2.png')}
//                   />
//                   <Text
//                     style={{
//                       fontSize: 10,
//                       width: wp('8%'),
//                       marginLeft: 2,
//                       color: colors.editprofileheading,
//                     }}>
//                     Login
//                   </Text>
//                 </View>
//               )}
//             </TouchableOpacity>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Signup"
//         component={Signup}
//         options={{
//           tabBarShowLabel: false,
//           tabBarLabel: '',
//           tabBarIcon: ({focused}) => (
//             <TouchableOpacity
//               onPress={() => {
//                 props.navigation.navigate('Signup');
//               }}>
//               {focused ? (
//                 <View
//                   style={{
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginTop: 7,
//                   }}>
//                   <Image
//                     style={{height: 20, width: 20, marginBottom: 10}}
//                     source={require('../assets/gridNew.png')}
//                   />
//                   <Text
//                     style={{
//                       fontSize: 10,
//                       width: wp('8%'),
//                       marginLeft: 5,
//                       color: colors.differentPink,
//                     }}>
//                     Signup
//                   </Text>
//                 </View>
//               ) : (
//                 <View style={{justifyContent: 'center', alignItems: 'center'}}>
//                   <Image
//                     style={{
//                       height: 20,
//                       width: 20,
//                       marginBottom: 10,
//                     }}
//                     source={require('../assets/gridNew2.png')}
//                   />
//                   <Text
//                     style={{
//                       fontSize: 10,
//                       width: wp('8%'),
//                       marginLeft: 2,
//                       color: colors.editprofileheading,
//                     }}>
//                     Signup
//                   </Text>
//                 </View>
//               )}
//             </TouchableOpacity>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileInformation}
//         options={{
//           tabBarShowLabel: false,
//           tabBarLabel: '',
//           tabBarIcon: ({focused}) => (
//             <TouchableOpacity
//               onPress={() => {
//                 props.navigation.navigate('Profile');
//               }}>
//               {focused ? (
//                 <View
//                   style={{
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginTop: 7,
//                   }}>
//                   <Image
//                     style={{height: 20, width: 20, marginBottom: 10}}
//                     source={require('../assets/chatNew.png')}
//                   />
//                   <Text
//                     style={{
//                       fontSize: 10,
//                       width: wp('8%'),
//                       marginLeft: 5,
//                       color: colors.differentPink,
//                     }}>
//                     Profile
//                   </Text>
//                 </View>
//               ) : (
//                 <View style={{justifyContent: 'center', alignItems: 'center'}}>
//                   <Image
//                     style={{
//                       height: 20,
//                       width: 20,
//                       marginBottom: 10,
//                     }}
//                     source={require('../assets/chatNew2.png')}
//                   />
//                   <Text
//                     style={{
//                       fontSize: 10,
//                       width: wp('8%'),
//                       marginLeft: 2,
//                       color: colors.editprofileheading,
//                     }}>
//                     Profile
//                   </Text>
//                 </View>
//               )}
//             </TouchableOpacity>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     // </NavigationContainer>
//   );
// }

export default function TabNavigation(props) {
  const Tab = createBottomTabNavigator();
  return (
    // <NavigationContainer> //when using nesting navigators use only one NavigationContainer at root
    <Tab.Navigator
    
      barStyle={{
        
        backgroundColor: 'white',
        borderWidth: 2,
        position: 'absolute',
        borderColor: colors.whiteColor,
        height: 65,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard:true,
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let tabLabel;
          let activetabIconImg;
          let inactiveTabIconImg;
          let inactiveColor = colors.editprofileheading;
          let activeColor = colors.differentPink;

          if (route.name === 'Login') {
            tabLabel = 'Login';
            activetabIconImg = require('../assets/homeNew.png');
            inactiveTabIconImg = require('../assets/homeNew2.png');
          } else if (route.name === 'Signup') {
            tabLabel = 'Signup';
            activetabIconImg = require('../assets/gridNew.png');
            inactiveTabIconImg = require('../assets/gridNew2.png');
          } else if (route.name === 'Profile') {
            tabLabel = 'Profile';
            activetabIconImg = require('../assets/chatNew.png');
            inactiveTabIconImg = require('../assets/chatNew2.png');
          }

          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(route.name)}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 7,
                }}>
                <Image
                  style={{height: 20, width: 20, marginBottom: 10}}
                  source={focused ? activetabIconImg : inactiveTabIconImg}
                />
                <Text
                  style={{
                    fontSize: 10,
                    width: wp('8%'),
                    marginLeft: 5,
                    color: focused ? activeColor : inactiveColor,
                  }}>
                  {tabLabel}
                </Text>
              </View>
            </TouchableOpacity>
          );
        },

        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="Profile" component={ProfileInformation} />
    </Tab.Navigator>
  );
}
