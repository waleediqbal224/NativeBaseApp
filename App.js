import React from 'react';
import {

  NativeBaseProvider,

} from 'native-base';
import Navigation from './Navigation';
import TabNavigation from './Navigation/TabNavigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <Navigation/>
      {/* <TabNavigation/> */}
    </NativeBaseProvider>
  );
};
export default App;
