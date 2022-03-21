import React from 'react';
import { View } from 'react-native';
import {Home} from './src/screens/Home'
import { theme } from './src/global/styles/theme'
import {StatusBar} from 'react-native'
import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font';
import {Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Routes }  from './src/routes';

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontLoaded){
    return <AppLoading/>
  }
  return (
    <View>
           <StatusBar
            backgroundColor={theme.colors.primary}
            translucent={false}
            barStyle='light-content'
          />
      <Routes/>
    </View>
  );
}

