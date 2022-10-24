import React, {useRef} from 'react';
import {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  StatusBar,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import Images from '../../theme/Images';
import {Icon, Avatar, Header, HeaderProps, SpeedDial} from '@rneui/themed';

import {Actionsheet, useDisclose, Box, Skeleton, Center} from 'native-base';

const ProfileInformation = () => {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);


  setTimeout(() => {
    setLoaded(true);
  }, 5000);
  const {isOpen, onOpen, onClose} = useDisclose();

  const [isVisible, setModalVisible] = useState(false);
  const [pic, setPic] = useState('');

  const text = '>>';

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    })
      .then(image => {
        console.log(image);
        setPic(image?.path);
      })
      .catch(e => {
        console.log(e);
      });

    setModalVisible(!isVisible);
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    })
      .then(image => {
        setPic(image?.path);
      })
      .catch(e => {
        console.log(e);
      });

    setModalVisible(!isVisible);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header
          backgroundColor="gray"
          statusBarProps={{backgroundColor: 'black'}}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
          }}
          rightComponent={<Icon name="notifications" color="white" />}
          centerComponent={{
            text: 'Header',
            style: {color: 'white', fontSize: 16, fontWeight: 'bold'},
          }}
        />
        <View style={{margin: 10}}>
          {/* <Skeleton
          h={28}
          isLoaded={loaded}
          borderWidth={1}
          borderColor="coolGray.200"
          endColor="warmGray.300"
          alignSelf={'center'}
          width={100}
          rounded="md">
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image source={Images.logo} style={{height: 28, width: 28}} />
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 18,
                lineHeight: 21,
              }}>
              GridHup
            </Text>
          </View>
        </Skeleton> */}
          <Skeleton.Text
            isLoaded={loaded}
            lines={1}
            alignSelf={'center'}
            w={150}>
            <Text style={styles.headingContainer}>Profile Information</Text>
          </Skeleton.Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={{alignItems: 'center'}}>
            <Skeleton
              borderColor="coolGray.200"
              endColor="warmGray.300"
              h={30}
              w={100}
              rounded={'full'}
              isLoaded={loaded}>
              <Text style={{color: 'black', fontSize: 14}}>
                Upload your profile picture
              </Text>
              <Text style={{color: '#2596be', fontSize: 14}}>
                Recommended size (5MB)
              </Text>
            </Skeleton>
          </View>
          <View style={styles.imageContainer}>
            <Center>
              <Skeleton
                h={250}
                isLoaded={loaded}
                borderWidth={1}
                borderColor="coolGray.200"
                endColor="warmGray.50"
                width={250}>
                <Avatar
                  size={250}
                  rounded
                  source={
                    pic
                      ? {uri: pic}
                      : {uri: 'https://randomuser.me/api/portraits/men/9.jpg'}
                  }
                  title="AJ"
                  containerStyle={{backgroundColor: 'grey'}}>
                  <Avatar.Accessory
                    name="photo-camera"
                    //type='evilicons'
                    color={'black'}
                    onPress={onOpen}
                    //source={{uri: 'https://randomuser.me/api/portraits/men/9.jpg'}}
                    size={50}
                  />
                </Avatar>
              </Skeleton>
            </Center>
            {/* <Skeleton
            h={250}
            isLoaded={loaded}
            borderWidth={1}
            borderColor="coolGray.200"
            endColor="warmGray.50"
            width={250}
            >
            <Image
              borderRadius={20}
              style={{width: 250, height: 250}}
              source={pic ? {uri: pic} : Images.profilePic}
            />
          </Skeleton>
          <Pressable
            onPress={onOpen}
            style={{position: 'absolute', right: -15, bottom: -20}}>
                <Skeleton borderColor="coolGray.200"
            endColor="warmGray.300" h={10}  rounded={'full'} isLoaded={loaded}  >
            <Image source={Images.camera} style={{width: 50, height: 50}} />
            </Skeleton>
          </Pressable> */}
          </View>
          <View style={{alignItems: 'center', padding: 20}}>
            <Skeleton
              borderColor="coolGray.200"
              endColor="warmGray.300"
              h={10}
              w={300}
              rounded={'full'}
              isLoaded={loaded}>
              <Text style={{color: 'black', textAlign: 'center', fontSize: 16}}>
                Setup GridHup profile quickly by importing your LinkedIn profile
              </Text>
            </Skeleton>
          </View>
          {/* <Skeleton
            borderColor="coolGray.200"
            endColor="warmGray.300"
            h={5}
            w={200}
            rounded={'full'}
            isLoaded={loaded}>
            <View
              style={{
                flexDirection: 'row',
                width: 250,
                backgroundColor: 'white',
                borderRadius: 10,
                alignItems: 'center',
                padding: 10,
                elevation: 2,
                marginBottom: 20,
              }}>
              <Image
                source={Images.LinkedInLogo}
                style={{height: 28, width: 28}}
              />
              <Text
                style={{color: '#0274B3', marginLeft: 20, fontWeight: '700'}}>
                Import LinkedIn Profile
              </Text>
            </View>
          </Skeleton>
          <Skeleton.Text isLoaded={loaded} lines={2}>
            <Text style={{color: '#F61962', fontWeight: 'bold'}}>
              Setup profile manually{text}
            </Text>
          </Skeleton.Text> */}
        </View>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Actionsheet.Item
              startIcon={<Icon name="camera" type="fontawesome" />}
              onPress={() => openCamera()}>
              Take picture
            </Actionsheet.Item>
            <Actionsheet.Item
              startIcon={<Icon name="photo" color={'black'} />}
              onPress={() => openGallery()}>
              Upload from gallery
            </Actionsheet.Item>
            <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>

        <SpeedDial buttonStyle={{backgroundColor:'#F61962'}}
          isOpen={open}
          icon={{name: 'edit', color: '#fff',}}
          openIcon={{name: 'close', color: '#fff'}}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}>
          <SpeedDial.Action
            icon={{name:"camera", color:'white' ,type:"fontawesome" }}
            title="Camera"
            onPress={() => openCamera()}
          />
          <SpeedDial.Action
            icon={{name: 'photo', color: '#fff'}}
            title="Gallery"
            onPress={() => openGallery() }
          />
        </SpeedDial>

        {/* <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Upload picture
          </Text>
          <Pressable onPress={() => openCamera()} style={styles.modalBtn}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Take Picture
            </Text>
          </Pressable>
          <Pressable onPress={() => openGallery()} style={styles.modalBtn}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Upload from Gallery
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setModalVisible(!isVisible);
            }}
            style={{...styles.modalBtn, backgroundColor: 'white'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Cancel</Text>
          </Pressable>
        </View>
      </Modal> */}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    //paddingTop: 40,
  },
  headingContainer: {
    margin: 10,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 40,
  },
  profileContainer: {
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    paddingBottom: 130,
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },
  card: {
    width: 300,
    height: 60,
    backgroundColor: '#abdbe3',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 20,
    marginBottom: 10,
    elevation: 4,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 250,
    alignItems: 'center',
    backgroundColor: 'gray',
    justifyContent: 'space-between',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalBtn: {
    borderRadius: 10,
    padding: 10,
    width: 250,
    backgroundColor: '#2596be',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});
export default ProfileInformation;
