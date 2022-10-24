import {Center, Image, HStack, VStack, Box, Button} from 'native-base';
import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../theme/Images';

const PortalScreen = props => {
  return (
    // <Center flex={1} bg={'white'}>
    <LinearGradient
      colors={[ '#17CBC9','#F61962']}
      start={{x: 0, y: 0.5}}
      end={{x: 0.5, y: 1}}
      style={{flex: 1, alignItems: 'center'}}>
      <HStack alignItems={'center'} mt={30}>
        <Image alt="smallLogo" source={Images.logo} h={28} w={28} />
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            fontSize: 18,
            lineHeight: 21,
          }}>
          GridHup
        </Text>
      </HStack>
      <VStack my={10} alignItems={'center'}>
        <Image
          alt="people"
          resizeMode="contain"
          source={Images.portal}
          h={227}
        />
        <Box w={100}>
          <Text
            style={{
              color: '#020614',
              fontSize: 28,
              fontWeight: '700',
              lineHeight: 34,
              textAlign: 'center',
            }}>
            Hup on the Grid
          </Text>
        </Box>
        <Box w={210}>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 12,
              textAlign: 'center',
              color: '#999999',
            }}>
            Connect to expand your professional networks and boost your social
            net worth
          </Text>
        </Box>
      </VStack>
      <VStack h={120} justifyContent={'space-evenly'}>
        <Button
          bg={'#F61962'}
          w={280}
          _text={{fontWeight: 'bold'}}
          onPress={() => props.navigation.navigate('Login')}>
          Log In
        </Button>
        <Button
          bg={'#17CBC9'}
          w={280}
          _text={{fontWeight: 'bold'}}
          onPress={() => props.navigation.navigate('Signup')}>
          Sign Up
        </Button>
      </VStack>
      <Image
        alt="2people"
        style={{height: 190, width: '100%'}}
        source={Images.last}
      />
    </LinearGradient>
  );
};

export default PortalScreen;

