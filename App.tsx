import React from 'react';
import { View } from 'react-native';
import {Home} from './src/screens/Home'
import { theme } from './src/global/styles/theme'
import {StatusBar} from 'react-native'
import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font';
import {Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {Post} from './src/screens/Post'

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontLoaded){
    return <AppLoading/>
  }
  const Stack = createStackNavigator();

  return (
          <NavigationContainer
          >
          <StatusBar
            backgroundColor={theme.colors.primary}
            translucent={false}
            barStyle='light-content'
          />
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Post" component={Post} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

