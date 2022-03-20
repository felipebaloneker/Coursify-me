import React from 'react';
import { View } from 'react-native';
import {Home} from './src/screens/Home'
import { theme } from './src/global/styles/theme'
import {StatusBar} from 'react-native'
export default function App() {

  return (
    <View>
           <StatusBar
            backgroundColor={theme.colors.primary}
            translucent={false}
            barStyle='light-content'
          />
      <Home/>
    </View>
  );
}

