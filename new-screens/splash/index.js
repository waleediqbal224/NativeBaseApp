import React from 'react';
import Images from '../../theme/Images';

import { Center,Image } from 'native-base';

const Splash = props => {
  setTimeout(() => {
    props.navigation.navigate('Onboarding');
  }, 2000);
  return (

    <Center bg={'white'} flex={1} >
        <Image alt='logo' h={150} w={150}  source={Images.splashImg}  />
    </Center>
    
  );
};



export default Splash;
