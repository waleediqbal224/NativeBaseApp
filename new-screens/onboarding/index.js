import React, {useState} from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '../../theme/Images';
import LinearGradient from 'react-native-linear-gradient';
import {Center, Circle, HStack, VStack, Text, Box, Button} from 'native-base';

const Dot = () => {
  return <Circle borderWidth={0.5} borderColor={'#707070'} h={2} w={2} />;
};
const ActiveDot = () => {
  return (
    <Circle
      borderWidth={0.5}
      bg={'gray.300'}
      borderColor={'#000000'}
      h={2}
      w={2}
    />
  );
};

const Onboarding = props => {
  const [index, setIndex] = useState(0);
  const {layer_1, layer_2, layer_3, layer_4, layer_5} = Images;

  const moveSlide = () => {
    let currentIndex = index;
    if (currentIndex < sliderData.length) {
      currentIndex++;
      setIndex(currentIndex);
    } else {
      setIndex(0);
    }
  };

  const sliderData = [
    {
      id: 1,
      image: layer_1,
      text: 'Community',
      text1:
        'Your grid is your powerhouse! You’re plugged into resourceful communities of practice.',
    },
    {
      id: 2,
      image: layer_2,
      text: 'Resource',
      text1:
        'A cumulus of knowledge in the form of #asks and #gives. You can recycle or reuse knowledge.',
    },
    {
      id: 3,
      image: layer_3,
      text: 'Monetize',
      text1:
        'Create monetized rooms and earn recurring income from valuable skills and knowledge',
    },
    {
      id: 4,
      image: layer_4,
      text: 'Manifest',
      text1:
        'It’s your turn, blow your horn. Your skill. product and services are essential',
    },
    {
      id: 5,
      image: layer_5,
      text: 'Anonymous sharing',
      text1:
        'Open pool of faceless publishers. Your identity is disconnected and private',
    },
  ];

  return (
    // <Center bg={'white'} flex={1}>
    <LinearGradient
      colors={['#e96443', '#904e95']}
      style={{flex: 1, alignItems: 'center'}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <HStack alignItems={'center'} mt={30}>
        <Image source={Images.logo} style={styles.logo} />
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
      <Swiper
        dot={<Dot />}
        activeDot={<ActiveDot />}
        loop={false}
        index={index}>
        {sliderData.map(item => {
          return (
            <VStack alignItems={'center'} pt={100} key={item.id}>
              <Image
                source={item.image}
                style={{height: 227, width: '100%', resizeMode: 'contain'}}
              />
              <VStack mt={1}>
                <Text
                  style={{
                    color: '#020614',
                    fontSize: 20,
                    lineHeight: 23,
                    fontWeight: '700',
                    alignSelf: 'center',
                  }}>
                  {item.text}
                </Text>
                <Box w={300}>
                  <Text
                    style={{
                      color: '#999999',
                      textAlign: 'center',
                      fontSize: 12,
                    }}>
                    {item.text1}
                  </Text>
                </Box>
              </VStack>
              <Text
                style={{marginTop: 20, color: '#999999', textAlign: 'center'}}>
                Swipe to explore
              </Text>
            </VStack>
          );
        })}
      </Swiper>
      <LinearGradient
        colors={['#000000', '#434343']}
        style={{
          alignItems: 'center',
          padding: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 180,
          justifyContent: 'space-evenly',
          width: '100%',
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        {/* <VStack
          bg={'#5D5D61'}
          justifyContent={'space-evenly'}
          h={180}
          w={'100%'}
          alignItems={'center'}
          p={10}
          borderTopLeftRadius={20}
          borderTopRightRadius={20}> */}
        <Button
          bg={'white'}
          _text={{color: 'black', fontWeight: 'bold'}}
          onPress={() => moveSlide()}
          w={280}>
          Next
        </Button>
        <LinearGradient
          colors={['#4ca1af', '#c4e0e5']}
          style={{
            alignItems: 'center',
            padding: 10,
            borderRadius: 5,
            //height: 180,
            justifyContent: 'space-evenly',
            width: 280,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Pressable onPress={() => props.navigation.navigate('TabNavigation')}>
            <Text>Get Started</Text>
          </Pressable>
        </LinearGradient>
        {/* <Button
          onPress={() => props.navigation.navigate('PortalScreen')}
          bg={'#17CBC9'}
          _text={{color: 'white', fontWeight: 'bold'}}
          w={280}>
          Get Started
        </Button> */}
        {/* </VStack> */}
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 28,
    height: 28,
  },
  modalContainer: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    backgroundColor: '#5D5D61',
    justifyContent: 'space-evenly',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Onboarding;
