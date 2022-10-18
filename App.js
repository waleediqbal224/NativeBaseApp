import React from 'react';
import {

  NativeBaseProvider,

} from 'native-base';
import Navigation from './Navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
  );
};
export default App;
