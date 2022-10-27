import {Button, Center} from 'native-base';
import React, {useState} from 'react';
import {Avatar, Icon} from '@rneui/themed';

import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import Images from '../../theme/Images';

const Signup = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View
        style={{
          marginTop: 60,
          marginBottom: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            lineHeight: 32,
            fontSize: 27,
            fontWeight: '600',
            color: '#FFFFFF',
          }}>
          SignUp
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingTop: 10,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          paddingBottom: 50,
        }}>
        <Image
          source={Images.splashImg}
          style={{alignSelf: 'center', height: 100, width: 100}}
        />
        {/* <Center>
          <Avatar
            size={84}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/9.jpg'}}
            title="AJ"
            containerStyle={{backgroundColor: 'grey'}}>
            <Avatar.Accessory
            name='photo-camera'
            //type='evilicons'
            color={'black'}
            onPress={()=>alert('shj')}
            
              //source={{uri: 'https://randomuser.me/api/portraits/men/9.jpg'}}
              size={23}
            />
          </Avatar>
        </Center> */}

        <View style={{marginTop: 30, marginBottom: 30}}>
          <Text style={styles.labels}>First name</Text>

          <TextInput
            value={firstName}
            onChangeText={v => setFirstName(v)}
            style={styles.input}
            color={'black'}
          />

          <Text style={styles.labels}>Last name</Text>

          <TextInput
            value={lastName}
            onChangeText={v => setLastName(v)}
            style={styles.input}
            color={'black'}
          />

          <Text style={styles.labels}>Phone Number (Optional)</Text>

          <TextInput style={styles.input} color={'black'} />

          <Text style={styles.labels}>Country</Text>

          <TextInput style={styles.input} color={'black'} />

          <Text style={styles.labels}>Email</Text>

          <TextInput
            value={email}
            onChangeText={v => setEmail(v)}
            style={styles.input}
            color={'black'}
          />

          <Text style={styles.labels}>Password</Text>

          <TextInput
            value={password}
            onChangeText={v => setPassword(v)}
            style={styles.input}
            color={'black'}
          />

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text style={{...styles.labels, marginLeft: 0}}>State</Text>

              <TextInput style={{...styles.input, width: 130}} />
            </View>
            <View>
              <Text style={{...styles.labels, marginLeft: 0}}>City</Text>

              <TextInput style={{...styles.input, width: 130}} />
            </View>
          </View>
        </View>
        <Button
          isLoading={isLoading}
          isLoadingText="Signing up"
          w={280}
          bg={'#F61962'}
          alignSelf={'center'}
          _text={{color: 'white', fontWeight: 'bold'}}
          onPress={() => {
            setLoading(!isLoading);
            setTimeout(() => {
              props.navigation.navigate('Login');
            }, 1000);
          }}>
          Sign Up
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#5D5D61',
  },
  input: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    height: 55,
    width: '85%',
    paddingLeft: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  labels: {
    color: '#00000059',
    fontWeight: '500',
    lineHeight: 18,
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 30,
  },
  button: {
    backgroundColor: '#F61962',
    borderRadius: 6,
    padding: 10,
    width: 280,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  errorMessage: {
    marginTop: -8,
    marginBottom: 10,
    color: 'red',
    marginLeft: 30,
  },
});

export default Signup;
