import React, {useState} from 'react';
import {View, Pressable, StyleSheet, TextInput, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Images from '../../theme/Images';
import {
  Image,
  HStack,
  Stack,
  Text,
  Center,
  Box,
  Divider,
  Button,
  FormControl,
  Input,
  WarningOutlineIcon,
} from 'native-base';
import {Icon} from '@rneui/themed';

const Login = props => {
  const [isChecked, setChecked] = useState(false);
  const [isVisible, setVisiblity] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        mt={20}
        mb={10}
        fontSize={27}
        color={'#FFFFFF'}
        fontWeight={'bold'}
        alignSelf={'center'}>
        Login Account
      </Text>
      <Center
        flex={1}
        bg={'#FFFFFF'}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}>
        <Image
          alt="logo"
          h={93}
          w={93}
          resizeMode={'contain'}
          source={Images.splashImg}
        />
        <Box mb={4} w={'90%'} mt={8}>
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Email</FormControl.Label>
              <Input
                flex={1}
                type="email"
                //defaultValue="12345"
                placeholder="email"
              />
              <FormControl.HelperText>
                Enter a valid email.
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Enter a valid email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          {/* <Text style={styles.labels}>Email</Text>
          <HStack
            px={2}
            alignItems={'center'}
            borderRadius={7}
            borderWidth={2}
            borderColor={'#EFEFEF'}>
            <Image alt="email" source={Images.email} w={18} h={15} />
            <Divider orientation="vertical" ml={2} h={4} bg={'black'} />
            <TextInput
              onChangeText={v => setEmail(v)}
              style={{marginLeft: 10, flex: 1, marginRight: 10}}
              color={'black'}
            />
          </HStack>
          <Text style={styles.labels}>Password</Text> */}
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Password</FormControl.Label>
              <Input
                flex={1}
                type="password"
                //defaultValue="12345"
                placeholder="password"
              />
              <FormControl.HelperText>
                Must be atleast 6 characters.
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          {/* <HStack
            px={2}
            borderRadius={7}
            borderWidth={2}
            borderColor={'#EFEFEF'}
            alignItems={'center'}>
            <Image
              alt="password"
              source={Images.password}
              style={{width: 14, height: 18}}
            />
            <Divider orientation="vertical" ml={2} h={4} bg={'black'} />
            <TextInput
              onChangeText={v => setPasword(v)}
              secureTextEntry={!isVisible}
              style={{marginLeft: 10, flex: 1, marginRight: 50}}
              color={'black'}
            />
            <Pressable onPress={() => setVisiblity(!isVisible)}>
              <Image
                alt="eye"
                source={!isVisible ? Images.unshow : Images.eye}
                style={{width: 16, height: 16, resizeMode: 'contain'}}
              />
            </Pressable>
          </HStack> */}
        </Box>

        <HStack
          alignItems={'center'}
          w={'90%'}
          justifyContent={'space-between'}>
          <HStack>
            <CheckBox
              containerStyle={{margin: 0, padding: 0}}
              checkedIcon={
                <Image
                  alt="checkActive"
                  source={Images.checkActive}
                  w={18}
                  h={18}
                  resizeMode={'contain'}
                />
              }
              uncheckedIcon={
                <Box
                  w={18}
                  h={18}
                  borderWidth={1}
                  borderRadius={5}
                  borderColor={'gray.400'}
                />
              }
              checked={isChecked}
              onPress={() => setChecked(!isChecked)}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                lineHeight: 15,
                color: '#0C0D34',
              }}>
              Remember me
            </Text>
          </HStack>
          <Text
            style={{
              color: '#0C0D34',
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 15,
            }}>
            Forgot password?
          </Text>
        </HStack>
        <Button
          isLoading={isLoading}
          spinnerPlacement={'end'}
          isLoadingText={'Logging in'}
          mt={5}
          w={280}
          bg={'#F61962'}
          _text={{color: 'white', fontWeight: 'bold'}}
          onPress={() => {
            setLoading(!isLoading);
            !isLoading
              ? setTimeout(() => {
                  setLoading(false);
                  props.navigation.navigate('ProfileInformation');
                }, 2000)
              : null;
          }}>
          Log In
        </Button>

        <HStack
          alignItems={'center'}
          w={180}
          justifyContent={'space-evenly'}
          my={3}>
          <Icon
            size={44}
            color={'#E60023'}
            name="pinterest-with-circle"
            type="entypo"
          />
          <Icon
            size={44}
            color={'#0077B5'}
            name="facebook-square"
            type="antdesign"
          />
          <Icon size={44} color={'#1DA1F2'} name="twitter" type="antdesign" />
        </HStack>
        <HStack>
          <Text style={styles.lastText}>Don’t have an account ? </Text>
          <Pressable onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.lastText2}>Sign up</Text>
          </Pressable>
        </HStack>
      </Center>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#5D5D61',
  },

  labels: {
    color: '#00000059',
    fontWeight: '500',
    lineHeight: 18,
    fontSize: 15,
    marginBottom: 5,
  },

  lastText: {
    color: 'black',
    fontSize: 13,
    lineHeight: 14,
    fontWeight: '500',
  },
  lastText2: {
    color: '#F61962',
    fontSize: 13,
    lineHeight: 14,
    fontWeight: '700',
  },
});

export default Login;
